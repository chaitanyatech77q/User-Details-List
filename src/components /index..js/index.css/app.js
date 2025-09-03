import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Chaitanya G',
    role: 'MERN DEVELOPER',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Somala Kavya',
    role: 'Associate Software Engg',
  },

  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Haritha K ',
    role: 'Swiggy',
  },

  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ajay Somala',
    role: 'Full stack DEVELOPER',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Details..</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile key={eachItem.uniqueNo} userDetails={eachItem} />
      ))}
    </ul>
  </div>
)

export default App
