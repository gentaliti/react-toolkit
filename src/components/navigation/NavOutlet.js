export default function NavOutlet({children, className}) {
    return <div className={`outlet ${className}`}>
        {children}
    </div>
}