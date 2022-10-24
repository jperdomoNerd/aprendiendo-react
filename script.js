// FUNCTIONS
function getNameAssassin(_name){
    if (_name.length > 10) { 
        return _name.toUpperCase();
    }
    return _name.toLowerCase();
}

// COMPONENTS
function Title(props) {
    return (
        <h2>
            🔪 {getNameAssassin(props.titleName)} The killer 🔪
        </h2>
    );
}

function Victim(props) {
    return (
        <li key={props.index}>
            <p>{props.name}</p>
            <button onClick={props.onClick}>Is dead 💀</button>
        </li>
    );
}

function List(props) {
    const victims = props.victims
    const listVictims = victims.map((victim, index) => {
        <Victim
            name={victim.name}
            index={index}
            onClick={() => this.props.onClick(index)}  />
    });
    return (
        <ul>{listVictims}</ul>
    );
}

class AddVictimForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addVictim = this.addVictim.bind(this);
    }

    handleChange(e) {
        this.props.onVictimChange(e.target.value);
    }

    addVictim() {
        console.log('Victim Added');
    }

    render() {
        const victim = this.props.victim;
        return (
            <div>
                <input 
                    type="text" 
                    value={victim} 
                    onChange={this.handleChange} 
                />
                <button onClick={this.addVictim}>
                    Add victim 😈
                </button>
            </div>
        );
    }
}

// MAIN COMPONENT
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            listVictims: [],
            victim: ''
        }
        this.handleClickKillVictim = this.handleClickKillVictim.bind(this);
        this.handleVictimChange = this.handleVictimChange.bind(this);
    }

    handleClickKillVictim(_index) {
        const newListVictims = 
            listVictims.filter((victim, index) => index !== _index)
        this.setState({
            listVictims: newListVictims
        })
    }

    handleVictimChange(victim) {
        this.setState({
            victim: victim
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.victim}</p>
                <code>{this.state.listVictims}</code>
                <Title titleName="Michael Myers" />
                <List 
                    victims={this.state.listVictims}
                    onClick={index => this.handleClickKillVictim(index)} />
                <AddVictimForm
                    victim={this.state.victim}
                    
                    onVictimChange={this.handleVictimChange} />
            </div>
        );
    }
}

// VARIABLES
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
