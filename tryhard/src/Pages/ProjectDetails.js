import { useLocation } from 'react-router-dom';

export default function ProjectDetails() {
    const location = useLocation();
    console.log("Received state:", location.state);  // Check the received state

    const content = location.state?.details?.content;

    if (!content) {
        return <div>No details available</div>;
    }

    return (
        <div>
            <h1>Project Details</h1>
            {content.map((item, index) => (
                item.type === 'text' ? (
                    <p key={index}>{item.value}</p>
                ) : (
                    <img key={index} src={item.value} alt={`Detail ${index}`} />
                )
            ))}
        </div>
    );
}
