import Nav from "./Nav";
import logo from '../logo.png'
import { Link } from 'react-router-dom';
// the header
export default function Header() {

  const handleClearAnswers = () => {
    // Clear user answers from localStorage
    localStorage.removeItem('userAnswers');
    // Reset the selected option state to an empty string
    localStorage.removeItem('answeredQuestionIds');
  };

  const handleReturnHome = () => {
    const confirmReturnHome = window.confirm("Are you sure you want to cancel the quiz and return home?");
    
    if (confirmReturnHome) {
      // Perform any additional actions if needed
      // For example, redirect to the home page
      handleClearAnswers();
    }
  };

  return (
    <header>
      
      <nav className="navbar navbar-expand-lg navbar-light backgroundDarkNoGradient navFontSize text-light bottomLine navHeight">
        <div className="container">      
            <a className="navbar-brand">
              <Link to="/" onClick={handleReturnHome}><img id="companyLogo" src={logo}
                className="rounded float-left img-fluid" alt="Company Logo"></img>
              </Link></a>
        </div>
      </nav>
    </header>


  );
}