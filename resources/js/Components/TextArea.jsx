export default function TextArea({ id, className = "", value, onChange }) {
    return (
        <textarea
            id={id}
            className={`form-textarea ${className}`}
            value={value}
            onChange={onChange}
        />
    );
}
