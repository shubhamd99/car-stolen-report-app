import { Request, Response } from 'express';

// Create Complains
export const handlePostComplains = async (req: Request, res: Response, db: any) => {
	const { carModelNumber, note } = req.body;

	// select * from users where status = 'online' and fk_complains_id is null;
	const officersOnline = await db('users').where({ status: 'online', fk_complains_id: null });
	// console.log("driversOnline", officersOnline)

	db.transaction((trx: any) => {
		trx.insert({
			car_model: carModelNumber,
			notes: note,
		})
		.into('complains')
		.returning('*')
		.then((result: any) => {
			// console.log("result", result);

			if (officersOnline.length) {
				return trx('users').where({ id: officersOnline[0].id })
					.update({ fk_complains_id: result[0].id })
					.then((result2: any) => {
						return res.status(200).json(result[0]);
					})
					.then(trx.commit)
					.catch((err: any) => { 
						// console.log("err", err);
						res.status(400).json('wrong credentials')
					})
			} else {
				return res.status(200).json(result[0]);
			}
		 })
		.then(trx.commit)
		.catch((err: any) => {
			// console.log("err", err)
			trx.rollback;
			res.status(400).json('Error posting complains')
		});
	})
	.catch((err: any) => res.status(400).json('Error posting complains'))

}

// Fetch Complains
export const handleGetComplains = (req: Request, res: Response, db: any) => {
	// select complains.*, users.* from complains left join users on complains.id = users.fk_complains_id;
	db.select('complains.*', 'users.name as officer_name', 'users.email as officer_email', 'users.status as officer_status', 'users.id as officer_user_id')
	.from('complains').leftJoin('users', 'complains.id', 'users.fk_complains_id')
	.then((complains: any[]) => {
		if (complains.length) {
			res.json(complains)
		} else {
			res.status(400).json('Complains Not Found')
		}
	})
	.catch((err: any) => res.status(400).json('Error getting complains'))
}

// Update Complains Status
export const handleUpdateComplainsStatus = async (req: Request, res: Response, db: any) => {
	const { id, isCompleted } = req.body;
	if ( isCompleted === "undefined" ) {
		return res.status(400).json('incorrect form submission');
	}

	// select * from users where fk_complains_id = id;
	const officerWithLoad = await db('users').where('fk_complains_id', id);
	// console.log("officerWithLoad", officerWithLoad);

	db.transaction((trx: any) => {
		trx('complains').where({ id })
		.update({
			is_completed: isCompleted,
		})
		.returning('*')
		.then((result: any) => {
			// console.log("result", result[0]);
			// If Complain status is completed, we will un-assign it from officers
			if (result[0].is_completed === true && officerWithLoad.length) {
				return trx('users').where({ id: officerWithLoad[0].id })
					.update({ fk_complains_id: null })
					.then((result2: any) => {
						return res.status(200).json(result[0]);
					})
					.then(trx.commit)
					.catch((err: any) => { 
						res.status(200).json(result);
					})
			} else {
				return res.status(200).json(result);
			}
		})
		.then(trx.commit)
		.catch((err: any) => {
			// console.log("err", err)
			res.status(400).json('Unable to update the complain status')
		});
	})
	.catch((err: any) => res.status(400).json('Unable to update the complain status'))
	
}
