import { AvatarsList, CardComponent, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
    const mockListData = [
      {
        avatar: './dnc-avatar.svg',
        name: 'Nome Sobrenome 1',
        subtitle: currencyConverter(1234.54),
      },
      {
        avatar: './dnc-avatar.svg',
        name: 'Nome Sobrenome 2',
        subtitle: currencyConverter(6444.26),
      },
      {
        avatar: './dnc-avatar.svg',
        name: 'Nome Sobrenome 3',
        subtitle: currencyConverter(3873.98),
      },
    ]
    return (
      <>
        <Header/>
        <Container maxWidth="lg">
            <CardComponent>CARD</CardComponent>
            <CardComponent>
              <AvatarsList listData={mockListData}/>
            </CardComponent>
        </Container>
        <h1>Home</h1>
      </>
    )
  }
  
export default Home