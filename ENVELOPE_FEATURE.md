# Envelope Feature Implementation

## Overview
The Paper Price Calculator now includes a specialized workflow for Envelope calculations, along with options for Box, Flyer, and Book.

## What's Been Implemented

### 1. Product Type Selector
**Location:** Section 1 - First field
**Options:**
- Envelope
- Box
- Flyer
- Book

### 2. Envelope-Specific Fields (Only shown when "Envelope" is selected)

#### a. Select Sides
Dropdown with options:
- 1 Side
- 2 Sides

#### b. Coloring Option
Dropdown with options:
- No Color
- Single Color
- Multi Color
- Full Color

#### c. Quantity
- Number input field
- Numbers only
- Minimum value: 1

#### d. Size (Height and Width)
- Two input fields side by side
- Height (cm)
- Width (cm)
- Decimal values allowed
- Step: 0.01 cm

### 3. Standard Fields (Shown for Box, Flyer, Book)
When you select Box, Flyer, or Book, the application shows the standard paper calculator fields:
- Paper Type (A1, A2, A3, A4, Custom)
- Paper Height and Width
- Machine Size
- Quantity

## How It Works

1. **Select Product Type**: When you open the application, the first dropdown lets you choose between Envelope, Box, Flyer, or Book.

2. **Dynamic Field Display**:
   - If you select "Envelope", only the envelope-specific fields appear
   - If you select any other product type, the standard paper fields appear
   - No fields are shown until you select a product type

3. **Validation**: When you click "Next":
   - For Envelope: All envelope fields must be filled (sides, coloring, quantity, height, width)
   - For others: All standard fields must be filled (paper type, dimensions, machine size, quantity)

4. **Data Storage**: All selections are stored in the `formData` object for use in calculations

## Testing the Feature

1. Open `index.html` in your browser
2. Select "Envelope" from the Product Type dropdown
3. Verify that the envelope fields appear:
   - Select Sides
   - Coloring Option
   - Quantity
   - Height (cm)
   - Width (cm)
4. Try filling out the form and clicking "Next"
5. Try selecting a different product type (Box, Flyer, Book) and verify standard fields appear

## Files Modified

1. **index.html**
   - Added Product Type selector
   - Added envelope-specific fields
   - Reorganized standard fields into a conditional section

2. **script.js**
   - Added `productType`, `envelopeSides`, and `envelopeColoring` to `formData`
   - Added event listener for Product Type selection
   - Added envelope field event listeners
   - Updated validation logic in `goToSection()` function to handle both envelope and standard workflows

## Next Steps (Future Enhancements)

You may want to:
1. Customize pricing calculations for envelope vs. other products
2. Add envelope-specific cost fields in Section 3
3. Update the invoice display to show envelope-specific details
4. Implement similar specialized workflows for Box, Flyer, and Book
