import { useState } from 'react';

const LinkedSelects = (props) => {
    const [firstSelectValue, setFirstSelectValue] = useState('');
    const [secondSelectValue, setSecondSelectValue] = useState('');
    const [secondSelectOptions, setSecondSelectOptions] = useState([]);
    const opciones = props.data
    const subtipos = props.subtipos

    const handleFirstSelectChange = event => {
        const selectedValue = event.target.value;
        props.onChangeTipo(event)
        setFirstSelectValue(selectedValue);

        // Fetch options for the second select based on the first select's value
        if (selectedValue === '1') {
            const subtiposA = subtipos.filter(subtipo => subtipo.tipoMuestra == 1);
            setSecondSelectOptions(subtiposA);
        } else if (selectedValue === '2') {
            const subtiposB = subtipos.filter(subtipo => subtipo.tipoMuestra == 2);
            setSecondSelectOptions(subtiposB);
        } else if (selectedValue === '3') {
            const subtiposC = subtipos.filter(subtipo => subtipo.tipoMuestra == 3);
            setSecondSelectOptions(subtiposC);
        } else {
            setSecondSelectOptions([]);
        }

        // Reset second select's value when changing the first select
        setSecondSelectValue('');
    };

    const handleSecondSelectChange = event => {
        props.onChangeSubtipo(event)
        setSecondSelectValue(event.target.value);
    };

    return (
        <>
            <div className='col-sm-12 col-md-6 col-lg-3'>
                <label className="form-label" htmlFor="tipo">Tipo</label>
                <select
                    className="form-select" 
                    id="tipo"
                    value={firstSelectValue} 
                    onChange={handleFirstSelectChange}
                >
                    <option value="">Seleccione tipo...</option>
                    {
                        opciones && opciones.map((opcion) => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)
                    }
                </select>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
                    <label className="form-label" htmlFor="subtipo">Subtipo</label>
                <select
                    className="form-select" 
                    id="subtipo"
                    value={secondSelectValue}
                    onChange={handleSecondSelectChange}
                    disabled={!firstSelectValue} // Disable if first select value is not set
                >
                    <option value="">Seleccione subtipo...</option>
                    {secondSelectOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default LinkedSelects;