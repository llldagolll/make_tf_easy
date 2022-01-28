import {useState, VFC} from 'react'

// interface Props {
//     label: string
//     value: string
//     placeholder: string
//     name: string
//     onChange?: (event: any, key: string) => void | undefined
//     className?: string 
// }

export const FormControl = (props: any) => {
    const [focused, setFocused] = useState(false)
    const handleFocused = (e:any) => {
        setFocused(true);
    }

    const {
        label,
        errorMessage,
        onChange,
        className,
        name,
        ...inputProps
    } = props;

    return (
        <div className={className}>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={(e) => onChange(e, name)}
                onBlur={handleFocused}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}
