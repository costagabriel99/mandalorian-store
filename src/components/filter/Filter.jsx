import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const FilterSection = styled.div`
  margin-bottom: 16px;
`

const Title = styled.h2`
  margin-bottom: 8px;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const CheckboxInput = styled.input`
  margin-right: 8px;
`

const ProductFilter = ({ categories, selectedCategories, onChange }) => {
  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    onChange(updatedCategories)
  }

  return (
    <Container>
      <FilterSection>
        <Title>Categories</Title>
        <CheckboxGroup>
          {categories.map((category) => (
            <Checkbox key={category}>
              <CheckboxInput
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </FilterSection>
    </Container>
  )
}

export default ProductFilter
