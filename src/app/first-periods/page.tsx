import NavBar from '../components/Navbar'
import FirstPeriodDesc from '../components/FirstPeriodDesc'
import Footer from '../components/Footer'
import { CopilotPopup } from "@copilotkit/react-ui";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

function FirstPeriodPage() {
  const COPILOT_CLOUD_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;
  return (
    

     <CopilotKit publicApiKey={COPILOT_CLOUD_PUBLIC_API_KEY}>
    <div style={{background: '#FFD8DF', margin:0, padding:0, boxSizing:'border-box', minHeight:'100vh', color:'black'}}>
    <NavBar/>
    <FirstPeriodDesc/>
    <Footer></Footer>
    <CopilotPopup
        instructions={`Your name is Maitri. You are a medical practitioner and specialize on topics
            regarding female menstruatual health , periods , symptoms related to it , its solutions , 
            diseases related to it and myths related to it.Don't provide the wrong answer to 
            things you do not know and you should not entertain any questions that are not related to female menstruation 
            , periods , symptoms related to it , its solutions , diseases related to it and myths related to it. You will answer things with respect to First Period and in a way such that you are teaching a 10 year old kid. So use layman terms as much as possible and make your answers sound simple and funny .`}
        labels={{
          title: "Maitri AI",
          initial: `First Time Periods ? No worries ! Ask as you want !`,
        }}
      />
    </div>
    </CopilotKit>
  )
}

export default FirstPeriodPage