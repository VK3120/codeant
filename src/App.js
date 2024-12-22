import React from "react";
import Sidebar from "./components/sidebar";
import Repositories from "./components/Repos";

function App() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FAFAFA",
                }}
            >
                {/* Repositories Frame */}
                <div
                    style={{
                        flex: 1,
                        padding: "24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E9EAEB",
                        borderRadius: "var(--radius-xl)",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Repositories />
                </div>
            </div>
        </div>
    );
}

export default App;
