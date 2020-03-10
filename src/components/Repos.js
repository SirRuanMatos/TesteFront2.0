import React, { useEffect, useState } from 'react';
import Card from "./Card";
import Keys from "../services/keys";
import Api from "../services/api";
import Popup from "../utils/Popup";

export default function Repos({ nameUser, type }) {
	const [data, setData] = useState(null);
	const [keys, setKeys] = useState([]);
	const [currentRepo, setCurrentRepo] = useState([]);
	const [entryText, setEntryText] = useState("");

	useEffect(() => {
		async function loadData() {
			try {
				var reposData = await Api.get("/users/" + nameUser + "/" + type);
				setData(reposData.data);
				setKeys(Keys(reposData.data[0]));
				setCurrentRepo(reposData.data[0]);
				if (type === "starred") {
					setEntryText("Repositórios estrelados");
				} else {
					setEntryText("Repositórios");
				}
			} catch (error) {
				Popup.exibeMensagem('error', 'Erro usário não encontrado');
			}
		}

		loadData();
	}, [type]);

	function changeRepo(i) {
		setCurrentRepo(data[i]);
		let updateEntryText;
		if (type === "starred") {
			updateEntryText = "Repositórios estrelados " + (i + 1) + " de " + data.length;
		} else {
			updateEntryText = "Repositórios " + (i + 1) + " de " + data.length;
		}

		setEntryText(updateEntryText);
	}



	return (
		<>
			<div className="row">
				<div className="col s12">
					<h6 className="title-repos">{entryText}</h6>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					{
						data && data.map((d, i) => (
							<button className="btn-floating btn-small waves-effect waves-light red" key={i} onClick={() => changeRepo(i)}>{i + 1}</button>
						))
					}
				</div>
			</div>
			<div className="row">
				{
					keys && keys.map(key => (
						<Card key={key} userKey={key} label={currentRepo[key]} />
					))
				}
			</div>
		</>
	);
}
