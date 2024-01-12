import { useState } from "react";
import { Container, Input } from "./styles";
import { IoSearchSharp } from "react-icons/io5";
import { useData } from "../../context/data";

function Search() {
  const [value, setValue] = useState("");
  const { searchMember } = useData();

  const handleChange = (item) => {
    setValue(item.target.value);
    
    searchMember(item.target.value);
  } 

  return (
    <Container>
      <IoSearchSharp size={22} />
      <Input 
        id="search"
        name="search"
        placeholder="Buscar..."
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Search;
