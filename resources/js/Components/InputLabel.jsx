export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-koulen text-sm text-gray-50 ` + className}>
            {value ? value : children}
        </label>
    );
}
