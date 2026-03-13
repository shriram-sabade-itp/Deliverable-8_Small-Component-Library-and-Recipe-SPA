export default function Button({ label, onClick, type = "button"}) {
    return (
        <button 
            type = {type}
            onClick={onClick}
            style={{
                padding: "8px 16px",
                cursor: "pointer",
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "6px"
            }}
        >
            {label}
        </button>
    );
}