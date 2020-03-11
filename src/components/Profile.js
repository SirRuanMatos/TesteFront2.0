import React, { useEffect, useState } from 'react';
import Card from "./Card";
import Keys from "../services/keys";
import Api from "../services/api";
import Popup from "../utils/Popup";

export default function Repos({ nameUser }) {
	const [data, setData] = useState(null);
	const [keys, setKeys] = useState([]);

	useEffect(() => {
		async function loadData() {
			try {
				var reposData = await Api.get("/users/" + nameUser);
				setData(reposData.data);
				setKeys(Keys(reposData.data));
			} catch (error) {
				Popup.exibeMensagem('error', 'Erro usário não encontrado');
				console.log(error);
			}
		}

		loadData();
	}, [nameUser])



	return (
		<>
			<div className="row">
				<div className="col s12 m7">
					<div className="card horizontal">
						<div className="card-image">
							<img src={data && data.avatar_url} alt="User profile" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<h6><strong> Nome: </strong>{data && data.name}</h6>
								<h6><strong> Compania: </strong>{data && data.company}</h6>
								<h6><strong> Localização: </strong>{data && data.location}</h6>
								<h6><strong> Email: </strong>{data && data.email}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				{
					keys && keys.map(key => (
						<Card key={key} userKey={key} label={data[key]} />
					))
				}
			</div>
		</>
	);
}
