import {VFC} from 'react'

// interface Props {
//     label: string
//     value: string
//     options: Array<string>
//     onChange?: (event: any) => void 
//     className?: string 
// }
export const Select = (props: any) => {
    return (
        <div>
            <label>{props.label}</label>
            <select value={props.value} onChange={(e) => props.onChange(e, props.stateKey)}>
                <option value="">以下の項目から選択してください</option>
                {props.options.map((item: string, index: number) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
            
        </div>
    )
}
