import { Outlet, redirect } from "react-router-dom";
import UpperDashboard from "./UpperDashboard";

export default function Root() {

  // Check if login
  if ("hehe" === "what"){
    return <>
      <h1>Not authenticated</h1>
    </>
  }

  return (
    <div>
      <UpperDashboard />
      {/* <Sidebar /> */}
        <Outlet />
    </div>
  )
}
