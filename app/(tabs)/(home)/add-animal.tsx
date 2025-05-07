import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAnimalContext } from '@/components/ui/ContextProvider';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import { object, string } from 'yup';

let animalSchema = object({
    name: string().required("Name is required."),
    animal: string().required("Animal is required."),
});

export default function AddNewAnimal() {
    const nav = useNavigation();
    const {addAnimal} = useAnimalContext();
    return (
        
        <ThemedView>
            <ThemedText>Add Animal</ThemedText>
            <Formik
                initialValues = {{
                    name: '',
                    animal: '',
                }}
                validationSchema = {animalSchema}
                // onSubmit = {(values) => console.log(values)}
                onSubmit = {(values, {resetForm}) => {
                    addAnimal({
                        name: values.name,
                        animal: values.animal,
                        link: values.name
                    });
                    console.log(values)
                    resetForm();
                    nav.goBack();
                }}
                
            >

                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                    <ThemedView>
                        <Text>Name</Text>
                        <TextInput 
                            id="name"
                            placeholder="Enter name here" 
                            value={values.name} 
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur}>                                
                        </TextInput>
                        {errors.name && touched.name && <Text>{errors.name}</Text>}
                        <Text>Animal</Text>

                        <TextInput 
                            id="animal"
                            placeholder="Enter animal type here" 
                            value={values.animal} 
                            onChangeText={handleChange('animal')}
                            onBlur={handleBlur}>                                
                        </TextInput>
                        {errors.animal && touched.animal && <Text>{errors.animal}</Text>}
                        <Button
                            title="Submit"
                            onPress={() => handleSubmit()}
                        />
                    </ThemedView>
                )

                }
            
            </Formik>
        </ThemedView>
    )
}


