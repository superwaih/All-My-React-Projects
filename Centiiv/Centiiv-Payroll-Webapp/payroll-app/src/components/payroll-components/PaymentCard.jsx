import React from 'react'

const PaymentCard = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
        <h1>Pay Once</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptatem veniam natus ratione? Provident nesciunt</p>

        <form >
            <input type="date" />
          


        </form>
    </div>
  )
}

export default PaymentCard