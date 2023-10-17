import { useState } from "react"
import { IResponseAPI } from "./types"
import axios from 'axios'
import Input from "../../Atoms/Input"
import Button from "../../Atoms/Button"

export default function Form() {
  const [responseAPI, setResponseAPI] = useState<IResponseAPI | undefined>(undefined)
  const [valueInput, setValueInput] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  function clearInput(){
    setValueInput("")
  }

  function handleSubmit(e){
    e.preventDefault()
    getData()
  }

   function getData() {
    axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion/' + valueInput + '.json'
      )
      .then((response) => {
        setResponseAPI(response.data.data)
      })
      .catch((error) => console.log(error))
    }

  return <>
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Escreva aqui" value={valueInput} onChange={handleChange} />
      <Button type="button" onClick={handleSubmit}>Click</Button>
    </form>
    <div>
      { responseAPI && responseAPI[valueInput] ?
      <div>
        <div>
          <h1>Champ: {responseAPI[valueInput].name}</h1>
          <p>Lore: {responseAPI[valueInput].lore}</p>
        </div>
        <div>
          {
            responseAPI[valueInput].spells.map((spells, i) => {
              return (<div key={i}>
                <p>Spell: {responseAPI[valueInput].spells[i].name}</p>
                <p>Description: {responseAPI[valueInput].spells[i].description}</p>
              </div> )
            })
          }
        </div>
        <div>
          <p>{responseAPI[valueInput].passive.name}</p>
          <p>{responseAPI[valueInput].passive.description}</p>
        </div>
      </div>
       : "" }
    </div>
  </>
}
