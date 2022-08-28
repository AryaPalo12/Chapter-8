import { Component } from "react";

class Identity extends Component {
    recursiveDisplay = () => {
        for(let i = 0; i<this.props.data;i++){
            <tr>
                <td>{this.props.data[i].no}</td>
                <td>{this.props.data[i].level}</td>
                <td>{this.props.data[i].name}</td>
            </tr>
        }
    }
    render(){
        return(
            <>
            <table>
                <tbody>
                    <tr>
                        <td><strong>No</strong></td>
                        <td><strong>Level</strong></td>
                        <td><strong>Nama</strong></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>SD</td>
                        <td>SD Swasta Sutomo 1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>SMP</td>
                        <td>SMP Swasta Sutomo 1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SMA</td>
                        <td>SMA Swasta Sutomo 1</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}

export default Identity;