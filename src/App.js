import './App.css';
import CallbackButton from './CallbackButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <CallbackButton command="sendAnalyticsEvent" />
        <CallbackButton command="showPaywall" />
        <CallbackButton command="showSignIn" />
        <CallbackButton command="showVideo" />
        <CallbackButton command="openNativeURL" url="https://support.espn.com/hc/en-us"/>

      </header>
    </div>
  );
}

export default App;
