import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Table.css'
import Men from '../Tables/img/beard.png'
import Table from 'react-bootstrap/Table';
// const Tables = () => {
//     return (

//         // <div className='ts'>
//         //     <Container>


//         //         <div className='tables'>

//         //             <Table borderless >
//         //                 <thead>
//         //                     <tr>
//         //                         <th> Common Attributes</th>
//         //                         <th>Generic Marketplace</th>
//         //                         <th>We</th>
//         //                         <th>In-house</th>
//         //                     </tr>
//         //                 </thead>
//         //                 <tbody>
//         //                     <tr>
//         //                         <td>Project management</td>
//         //                         <td>Mostly not available</td>
//         //                         <td className='blue' >
//         //                             <div>
//         //                                 <p>Separate project manager & co-ordinator</p>
//         //                                 <img src={Men}></img></div></td>
//         //                         <td>Self management</td>
//         //                     </tr>
//         //                     <tr>
//         //                         <td>Transparency</td>
//         //                         <td>Varies</td>
//         //                         <td >

//         //                             <span>Fully transparent</span>
//         //                         </td>
//         //                         <td>Varies</td>
//         //                     </tr>
//         //                     <tr>
//         //                         <td>Pricing structure</td>
//         //                         <td>Differs</td>
//         //                         <td className='blue'>
//         //                             <span>Affordable</span></td>
//         //                         <td>Expensive</td>
//         //                     </tr>
//         //                     <tr>
//         //                         <td>Delivery timeframe</td>
//         //                         <td>May get extended</td>
//         //                         <td>  <span> On-time  delivery</span></td>
//         //                         <td>Often delayed</td>
//         //                     </tr><tr>
//         //                         <td>Post launch support</td>
//         //                         <td>Rare</td>
//         //                         <td className='blue'>
//         //                             <div>
//         //                                 <p>Available</p>
//         //                                 <img src={Men}></img>
//         //                             </div></td>
//         //                         <td>Available</td>
//         //                     </tr>
//         //                     <tr>
//         //                         <td>Confidentiality</td>
//         //                         <td>Higher risk</td>
//         //                         <td > <div>
//         //                             <p>Highly confidental</p>
//         //                             <img src={Men}></img>

//         //                         </div>


//         //                         </td>
//         //                         <td>Not guaranteed</td>
//         //                     </tr>

//         //                 </tbody>
//         //             </Table>



//         //         </div>
//         //     </Container>
//         // </div>



//     )
// }

class Hello extends Component {

    constructor() {
        super();
        this.state = {
            countone: 1,
            counttwo: 1,
            accessways: 'stateaccess'
        }
        // this.Accessthree = this.Accessthree.bind(this);
    }


    // Change(value) {
    //     this.setState({
    //         countone: this.state.countone * value
    //     })
    // }
    // prev(value) {
    //     this.state({
    //         counttwo: this.state.counttwo * value
    //     }, (prevstate) => ({
    //         counttwo: prevstate - 1
    //     }))
    // }

    Accessone() {
        this.setState({
            accessways: 'successfully!'
        })
        console.log(this)
    }
    Accesstwo() {
        this.setState({
            accessways: 'successfully!'
        })
        console.log(this);
    }
    Accessthree() {
        this.setState({
            accessways: 'successfully!'
        })
        console.log(this)
    }

    render() {

        return (
            <div>
                {/* <h1>{this.state.countone}{this.state.counttwo}</h1>
                <button onClick={() => this.Change(2)}>change</button>
                <button onClick={() => this.prev(3)}>change</button> */}

                <h1>{this.state.accessways}</h1>
                <button type='button' onClick={() => this.Accessone()}>
                    click one
                </button>
                <button type='button' onClick={this.Accesstwo.bind(this)}>
                    click two
                </button>

                <button type='button' onClick={this.Accessthree()}>
                    click three
                </button>



            </div>
        )
    }
}

export default Hello;

