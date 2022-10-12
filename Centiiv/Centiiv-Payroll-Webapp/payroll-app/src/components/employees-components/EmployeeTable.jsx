import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


const data =[
    {
        id: 1,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 384784,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 7835875,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 843783479,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 5589589,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 1234,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 553533,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 57575,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
    {
        id: 5,
        name: "Amaka Nwoko",
        email: "flowrich31@gmail.com",
        phone: "+234 678 6789",
        group: "---"
    },
]
const EmployeeTable = () => {
  return (
    <TableContainer>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Group</Th>


        </Tr>
      </Thead>
      <Tbody>
        {
            data.map((d) => (
                <Tr key={d.id}>
                    <Td>{d.name}</Td>
                    <Td>{d.email}</Td>
                    <Td>{d.phone}</Td>
                    <Td>{d.group}</Td>
                </Tr>
            ))
        }
       
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}

export default EmployeeTable