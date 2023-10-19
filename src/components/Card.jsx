import styled from "styled-components"

const Container=styled.div`
cursor: pointer;


`
const Wrapper=styled.div`
margin: 12px;
align-items: center;

`


const Image=styled.img`
height: 250px;
width: 300px;

`

const ChannelDetails=styled.div`
display: flex;
gap: 12px;


`



const Title=styled.h6`
color: ${({theme})=>theme.text};
`
const ProfilPhoto=styled.img`
height: 30px;
width: 30px;
border-radius: 50%;
`


const SmallText=styled.h6`
color: ${({theme})=>theme.text};
font-size: 10px;

`


const NewDiv=styled.div`
display: flex;
gap: 12px;
align-items: center;

`
const Card = () => {
  return (
    <Container>
        <Image src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        
                  <ChannelDetails>
            <ProfilPhoto src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
            <Wrapper>

            <Title>This is the video title </Title>
           
                <SmallText>Videoe</SmallText>
                 <NewDiv>paddinggit 
            <SmallText>10000 view</SmallText>• <SmallText>1000 Likes</SmallText>
            </NewDiv>
            


            </Wrapper>

        </ChannelDetails>

  
    </Container>
  )
}
export default Card