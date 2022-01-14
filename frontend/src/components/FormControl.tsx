import {VFC} from 'react'

// interface Props {
//     label: string
//     value: string
//     placeholder: string
//     name: string
//     onChange?: (event: any, key: string) => void | undefined
//     className?: string 
// }

export const FormControl = (props: any) => {
    return (
        <div className={props.className}>
            <label>{props.label}</label>
            <input value={props.value} type="text" placeholder={props.placeholder} name={props.name} onChange={(e) => props.onChange(e, props.stateKey)} />
        </div>
    )
}
