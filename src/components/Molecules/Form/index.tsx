import { FormEvent, useState } from "react"
import { IResponseAPI } from "./types"
import axios from 'axios'
import Input from "../../Atoms/Input"
import Button from "../../Atoms/Button"
import Text from "../../Atoms/Text/Index"

export default function Form() {
  const [responseAPI, setResponseAPI] = useState<IResponseAPI | undefined>(undefined)
  const [valueInput, setValueInput] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>){
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
      <Button type="submit">Click</Button>
    </form>
    <div>
      { responseAPI && responseAPI[valueInput] ?
      <div>
        <div>
          <h1>Champ: {responseAPI[valueInput].name}</h1>
          <Text fontSize="16px" color="blue">Lore: {responseAPI[valueInput].lore}</Text>
        </div>
        <div>
          {
            responseAPI[valueInput].spells.map((spells, i) => {
              return (<div key={i}>
                <Text fontSize="16px" color="blue">Spell: {responseAPI[valueInput].spells[i].name}</Text>
                <Text fontSize="16px" color="blue">Description: {responseAPI[valueInput].spells[i].description}</Text>
              </div> )
            })
          }
        </div>
        <div>
          <Text fontSize="16px" color="blue">{responseAPI[valueInput].passive.name}</Text>
          <Text fontSize="16px" color="blue">{responseAPI[valueInput].passive.description}</Text>
        </div>
      </div>
       : "" }
    </div>
  </>
}
