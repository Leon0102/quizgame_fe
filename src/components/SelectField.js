import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from "@mui/system";
import React, { useState } from 'react';


const SelectField = (props) => {
    const { label, options } = props;

    
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    
    };

    return (
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
                <InputLabel >{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map(option => (
                        <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectField;