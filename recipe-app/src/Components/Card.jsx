export default function Card({ title, children }) {
    return (
        <div
            style= {{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
            }}

        >
            {title && <h3>{title}</h3>}
            <div> {children} </div>
        </div>
    );
}