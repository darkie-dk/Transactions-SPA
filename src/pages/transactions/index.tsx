import { useContext} from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/searchform";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateformatter, priceFormatter } from "../../utils/formatter";


export function Transactions() { 
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
              <td width='50%'>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>  
              </td>
              <td>{transaction.category}</td>
              <td>{dateformatter.format(new Date (transaction.createdAt))}</td>
            </tr>
              )
            })}
            <tr>
              <td width='50%'>Date with my gf</td>
              <td>
                <PriceHighlight variant='outcome'>
                  R$ 180,00
                </PriceHighlight> 
              </td>
              <td>entertainment</td>
              <td>13/12/2024</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}