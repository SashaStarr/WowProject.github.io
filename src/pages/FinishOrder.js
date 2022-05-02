import React from 'react'
import Navbar from '../components/Navbar'
import '../style/FinishOrder.css'
import { Link } from "react-router-dom";

const FinishOrder = () => {
  return (
    <div>
        <div className='SuccesTitle'>SUCCES</div>
        <div className='container' id='FinishContainer'>
            <div className='row'>
                <div className='col-12' id='FinishTitle'>
                    Twoje zamówienie jest gotowe
                </div>
            </div> 
            <div className='row' id='FinishOrderView'>
                <div className='col-6' id='titlefinishorder1'>
                    Your order: #2k32uibh
                </div>
                <div className='col-6' id='titlefinishorder2'>
                    20/04/22
                </div>
                <div className='col-12' id='FinishProductList'>
                    <p>Product 1 : 2x 5.99 zl</p>
                    <p>Product 2 : 5x 1.99 zl</p>
                </div>
                <div id='finishAmounth'>
                    Suma : XX.XX zl
                </div>
            </div>
            <div className='finishMapView'>
                <div className='row'>
                    <div className='col-12' id='finishMapTitle'>
                        Oczekuj wiadomości od kuriera po jego przybyciu
                    </div>
                </div>
                <div className='row' id='FinishMap'>
                    <img id='mapImg' alt='map' src='https://lh3.googleusercontent.com/oRFqhc8oaZs6i1sgtc5GnoUFZdwV5xYq_My7I_MqduP38gQ4oWMUDJx2U5ecQegB-szLDr4kfeCX6B8qyJejsSngcHg_gG-aw-F5wNW1aVvZikGomRju11CPeYeNg9bd-9G40YYjpwFtmlHT9ulWwUrfTZass_-D1ptOMV7LcaJX6no4LKZUa4Ch7WaDvo-MryP1XHckfkiKG0oVxmwuu7upWvEGJLb0l5TYz7CkS3w1snbgoiNXHka_zzzump0B9fJMabrFDKQS3cVo55Dpq9PMIKJmNO61QZaXJDnDgc02WArNkjYk0boDc3F7mrvNQOqw5CEqO3lWEgWu8eJZKZCPi5V0mvHT6m7YZyEuBwxPPymJ2kCpM_FkJDhfYSuJhwaGY9S-ffrPVqk4-744seUKKULiDRts4SBeL8y_grGtlOrMwBypxVNZ9Obs2wJQmFaFZgSLtOv0gJ9kry_kg9U5BOlTus5VZOTSDqT0jAE6zbAKu4smaqPQ3YcFDXWaJCLtLPbKMYApCwdhvXhpLz1hkOAMWvzHLfaR0hHJW8j0fOUwVWhiVPBpC0SPj3Z1MzUzczXo9boHTHyH57eyyAKFWZGiAHBYIyydNTEfQ3UyvGt8P2eDdbJ2FodNr4kwOG-RtdRT0fRJjAIMdJzGMBPqC33VmjY40UX4w4jLZPEs_XlNCVDAxtD3WlojBWLJx0Gf1SkT_0KBiFTja2TkeXSaJVPJ4ZEpYJRf8nip9QU5YWEFd5SK1si-NlmpFJaoiqjqsVh6qn5b6f6hW0zhxhffAwy8KzTBo70eMZBNII6mAUDQgCj4pgiCuU7JC6j0swEV_17-zawLx0eBQw9uOP3xWI6XyDvMO-JeHER_27F8k7AxP17fnfSHG5X_kSomz-2BNKbR0d3HMoNTqAMHfRDdf-U7z_GeRbG_egYZhr2A9OXaeV27381dbnwLJq6laL0DhgwE7LXofwg8zgbLtQW19RGJlYqC3i29TG9bzS_aeHjsAZL5=w402-h211-no?authuser=1'/>
                </div>
                <div className='row' id='rowClose'>
                    <Link exact to="/Home" className='col' id='Close'>
                        <div id='h1Close'>CLOSE</div>
                    </Link> 
                </div>
            </div>
        </div>
        
        <Navbar/>
    </div>
  )
}

export default FinishOrder