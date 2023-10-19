import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';


const Container=styled.div`
display: flex;
justify-content: flex-end;
background-color: ${({theme})=>theme.bgLighter};
position: sticky;
top: 0;





`


const Wrapper=styled.div`
height: 56px;
margin-top: 10px;

display: flex;



`


const Search=styled.div`
display: flex;
position: absolute;
width: 40%;
left:0px;
right:0px;
margin: auto;
background-color:${({theme})=>theme.soft};
height: 40px;
justify-content: space-between;
align-items: center;




`

const Input=styled.input`
background-color: transparent;
outline: none;
border: none;
font-size: 30;
width: 100%;
font-weight: 500;



`

const Button=styled.button`
display: flex;
padding: 8px 8px;
background-color: transparent;
align-items: center;
color: blue;
border-color: blue;
margin: 10px 10px;


`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input/>
          <SearchIcon/>

        </Search>
         </Wrapper>

    
      <Button>

            <PersonIcon/>
            SIGN IN


        </Button>
         
    </Container>
  )
}
export default Navbar