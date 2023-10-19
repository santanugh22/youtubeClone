import styled from "styled-components"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonIcon from '@mui/icons-material/Person';

const Container=styled.div`
flex:1;
background-color: ${({theme})=>theme.bgLighter};
height: 100vh;
color: ${({theme})=>theme.text};
position: sticky;
top: 0;



`


const Logo=styled.div`
display: flex;
align-items: center;

font-weight: bold;



`

const Img=styled.img`
height: 50px;
width: 50px;

`


const Wrapper=styled.div`
padding: 18px 35px;
`



const Item=styled.div`
display: flex;
align-items: center;

gap: 10px;

cursor: pointer;
padding: 7.5px 0px;




`



const Hr=styled.hr`
margin: 10px 0px;
border:0.5px solid #373737;
`


const Login=styled.div`
margin-top: 12px;

`

const Button=styled.button`
display: flex;
padding: 8px 8px;
background-color: transparent;
align-items: center;
color: blue;
border-color: blue;
margin-top: 10px;
`

const Menu = ({darkmode,setDarkMode}) => {
  return (
    <Container>
      <Logo>
        <Img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png" />
        Youtube
      </Logo>
    <Wrapper>
      <Item>
        <HomeIcon/>
        Home
        </Item>
         <Item>
        <ExploreIcon/>
        Explore
        </Item>
         <Item>
          <SubscriptionsIcon/>
       
        Subscriptions
        </Item>
         <Item>
          <VideoLibraryIcon/>

        Library
        </Item>
         <Item>
        <HistoryIcon/>
        History
        </Item>
        <Hr/>

        <Login>
          Sign in to See everything
          <Button>
            <PersonIcon/>
            SIGN IN

          </Button>

        </Login>
        <Hr/>


          <Item>
        <LibraryMusicIcon/>



        Music
        </Item>
         <Item>
        <SportsBaseballIcon/>
        Sports
        </Item>
         <Item>
          <SportsEsportsIcon/>
    

        Gaming
        </Item>
         <Item>
          <MovieCreationIcon/>

        Movies
        </Item>
         <Item>
        <NewspaperIcon/>
        News
        </Item>
          <Item>
        <LiveTvIcon/>
        Live
        </Item>
        <Hr/>

          <Item>
        <SettingsIcon/>
        Settings
        </Item>
         <Item>
        <FlagIcon/>
        Report
        </Item>
         <Item>
        <HelpIcon/>
        Help
        </Item>
          <Item onClick={()=>setDarkMode(!darkmode)}>
        <LightModeIcon/>
        Light Mode
        </Item>
    </Wrapper>
    </Container>
  )
}
export default Menu