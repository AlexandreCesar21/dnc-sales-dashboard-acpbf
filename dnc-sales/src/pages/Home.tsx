import { AvatarsList, CardComponent, CustomTable, Header } from "@/components"
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

    const mockTableData = {
      headers: ['Name', 'Emal', 'Actions'],
      rows: [
        [
          <span>Nome 1</span>,
          <span>nome1@email.com</span>,
          <button>ACTION</button>
        ],
        [
          <span>Nome 2</span>,
          <span>nome2@email.com</span>,
          <button>ACTION</button>
        ],
        [
          <span>Nome 3</span>,
          <span>nome3@email.com</span>,
          <button>ACTION</button>
        ],
      ]
    }
    return (
      <>
        <Header/>
        <Container maxWidth="lg">
            <CardComponent>CARD</CardComponent>
            <CardComponent>
              <AvatarsList listData={mockListData}/>
            </CardComponent>
            <CardComponent>
                <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
            </CardComponent>
        </Container>
        <h1>Home</h1>
      </>
    )
  }
  
export default Home