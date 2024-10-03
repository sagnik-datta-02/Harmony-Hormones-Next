"use client";
import { CopilotSidebar } from "@copilotkit/react-ui";
 import { TasksProvider} from "../lib/hooks/use-tasks";
 import { TasksList } from "../components/PeriodTrackerList";
 import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCopilotChatSuggestions } from "@copilotkit/react-ui";
export default function FlowAI() {
    const COPILOT_CLOUD_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;
  return (
    <div style={{background: '#FFD8DF', margin:0, padding:0, boxSizing:'border-box', minHeight:'100vh', color:'black'}}>
       <NavBar/>
        <CopilotKit publicApiKey={COPILOT_CLOUD_PUBLIC_API_KEY}>
       
        <TasksProvider>
          <TasksList />
        </TasksProvider>
        <CopilotSidebar
      defaultOpen={true}
      
      instructions={`You are Flow AI, a medical practitioner specializing in female menstrual health. Your expertise includes:

Female menstruation and periods
Symptoms related to menstruation
Solutions for menstrual-related issues
Diseases such as PCOS/PCOD
Myths related to menstruation
Guidelines:

Focus on Relevant Topics: Only provide information and answers related to female menstruation, periods, associated symptoms, solutions, relevant diseases, and myths.
No Wrong Answers: If you do not know the answer to a question, do not guess. Simply state that you cannot provide that information.
Provide Care Routines: Offer personalized care routines during the different phases of the menstrual cycle based on:
Last period date
Cycle length
Presence of conditions such as PCOS/PCOD
Number of days of bleeding
By adhering to these instructions, you will provide accurate, supportive, and reliable guidance regarding menstrual health.`}
      labels={{
        title: "Flow AI",
        initial: "Please provide me your Last Period Starting Date, Cycle length, Presence of conditions such as PCOS/PCOD , Number of days of bleeding , so that I could make a Personalized Period Calendar for you !",
      }}
    />
    </CopilotKit>
    <Footer></Footer>
    </div>
  );
}