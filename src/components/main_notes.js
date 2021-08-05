import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ReactModal from 'react-modal';

export class main extends Component {
    constructor(){
        super();
        this.state = {
            launches: [],
            missions: [],
            rockets: [],
            showModal: false
        }
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleOpenModalLaunch = this.handleOpenModalLaunch.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }

      handleOpenModalLaunch = async e => {
        this.setState({ showModal: true });
        this.setState({missions: []});
        await fetch(`https://api.spacexdata.com/v3/launches`)
        .then(res => res.json())
        .then(json => this.setState({ launches: json }));
      }

      handleCloseModal () {
        this.setState({ showModal: false, launches: [], missions: [] });

      }

//     getLaunches  = async e => {
//         // alert('launch')
//         this.setState({missions: []});
//         await fetch(`https://api.spacexdata.com/v3/launches`)
//         .then(res => res.json())
//         .then(json => this.setState({ launches: json }));
//     }

//     getMissions = async e => {
//         // alert('missions');
//         this.setState({launches: []});
//        await fetch(`https://api.spacexdata.com/v3/missions`)
//         .then(res => res.json())
//         .then(json => this.setState({ missions: json }));
//   console.log(this.state.missions)
//     }

    handleOpenModalMissions = async e => {
    this.setState({launches: [], showModal: true});
    await fetch(`https://api.spacexdata.com/v3/missions`)
     .then(res => res.json())
     .then(json => this.setState({ missions: json }));
    console.log(this.state.missions)
    }

    
    // getRockets  = async e =>  {
    //     // alert('rockets')
    //     this.setState({missions: []});
    //     await fetch(`https://api.spacexdata.com/v3/rockets`)
    //     .then(res => res.json())
    //     .then(json => this.setState({ launches: json }));
    // }

    // clear = () => {
    //     this.setState({missions: []});
    //     this.setState({launches: []});
    // }


    render() {

        const mystyle = {
            color: "black",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center",
            fontWeight: '700',
          };

          const buttonStyle = {
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center",
            marginLeft: '45.4%',
            marginRight: "40%"
          };


        return (
            <div>
                <Button variant = 'primary' 
                        onClick= {this.handleOpenModalLaunch}>Launches</Button><br></br>

                <Button variant = 'secondary' 
                onClick= {this.handleOpenModalMissions}>Missions</Button><br></br>
                
                {/* <Button variant = 'danger' onClick= {this.clear}>Clear</Button><br></br> */}
                {/* <Button variant = 'secondary' onClick= {this.getRockets}>Rockets</Button> */}
 
                {/* {this.state.missions.map(mission => 
                <div key={mission}>{mission.mission_name}</div>)} */}

                {/* {this.state.launches.map(launch => 
                <div key={launch}>{launch.mission_name}</div>)} */}

                {/* {this.state.rockets.map(rocket => 
                <div key={rocket}>{rocket.mission_name}</div>)} */}

            <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"  
                >
            
                

                {/* {this.state.launches.map(launch => 
            
                <div key={launch} style= {mystyle}>{launch.mission_name}</div>)} */}

                {this.state.launches.map(launch => 
                <a style={{textDecoration: 'none'}} href={`http://www.google.com/search?q=SpaceX+${launch.mission_name}`} target="_blank"><div key={launch} style= {mystyle}>Launch: {launch.mission_name} 
                
                </div></a>)}

                {this.state.missions.map(mission => 
                <a style={{textDecoration: 'none'}} href={`http://www.google.com/search?q=SpaceX+${mission.mission_name}`} target="_blank"><div key={mission} style= {mystyle}>Mission: {mission.mission_name} Maker: {mission.manufacturers[0]}
                
                </div></a>)}
                <Button variant = 'danger' onClick={this.handleCloseModal} style={buttonStyle}>Close Modal</Button>
            </ReactModal>
            </div>
        )

        
    }
}

export default main
