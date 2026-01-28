// Store form data
let formData = {
    productType: '',
    paperType: '',
    paperHeight: 0,
    paperWidth: 0,
    machineSize: '',
    quantity: 0,
    price: 0,
    sheetPerPacket: 0,
    printCost: 0,
    laminationCost: 0,
    dieCost: 0,
    packetingCost: 0,
    pastingCost: 0,
    hotSpan: 0,
    // Envelope-specific fields
    envelopeSides: '',
    envelopeColoring: ''
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Handle Product Type selection
    document.getElementById('productType').addEventListener('change', function () {
        const productType = this.value;
        formData.productType = productType;
        const envelopeFields = document.getElementById('envelopeFields');
        const standardFields = document.getElementById('standardFields');

        if (productType === 'Envelope') {
            // Show envelope fields, hide standard fields
            envelopeFields.style.display = 'block';
            standardFields.style.display = 'none';
        } else if (productType) {
            // Show standard fields, hide envelope fields
            envelopeFields.style.display = 'none';
            standardFields.style.display = 'block';
        } else {
            // Hide both if nothing selected
            envelopeFields.style.display = 'none';
            standardFields.style.display = 'none';
        }
    });

    // Store envelope-specific data
    document.getElementById('envelopeSides').addEventListener('change', function () {
        formData.envelopeSides = this.value;
    });

    document.getElementById('envelopeColoring').addEventListener('change', function () {
        formData.envelopeColoring = this.value;
    });

    document.getElementById('envelopeQuantity').addEventListener('input', function () {
        formData.quantity = parseFloat(this.value) || 0;
    });

    document.getElementById('envelopeHeight').addEventListener('input', function () {
        formData.paperHeight = parseFloat(this.value) || 0;
        updatePaperSizeDisplay();
    });

    document.getElementById('envelopeWidth').addEventListener('input', function () {
        formData.paperWidth = parseFloat(this.value) || 0;
        updatePaperSizeDisplay();
    });

    // Store paper type
    document.getElementById('paperType').addEventListener('change', function () {
        formData.paperType = this.value;
        document.getElementById('paperTypeDisplay').value = this.value;
    });

    // Store paper height
    document.getElementById('paperHeight').addEventListener('input', function () {
        formData.paperHeight = parseFloat(this.value) || 0;
        updatePaperSizeDisplay();
    });

    // Store paper width
    document.getElementById('paperWidth').addEventListener('input', function () {
        formData.paperWidth = parseFloat(this.value) || 0;
        updatePaperSizeDisplay();
    });

    // Store machine size
    document.getElementById('machineSize').addEventListener('change', function () {
        formData.machineSize = this.value;
        document.getElementById('machineSizeDisplay').value = this.value;
    });

    // Store quantity
    document.getElementById('quantity').addEventListener('input', function () {
        formData.quantity = parseFloat(this.value) || 0;
    });

    // Store pricing data
    document.getElementById('price').addEventListener('input', function () {
        formData.price = parseFloat(this.value) || 0;
    });

    document.getElementById('sheetPerPacket').addEventListener('input', function () {
        formData.sheetPerPacket = parseFloat(this.value) || 0;
    });

    // Store additional costs
    document.getElementById('printCost').addEventListener('input', function () {
        formData.printCost = parseFloat(this.value) || 0;
    });

    document.getElementById('laminationCost').addEventListener('input', function () {
        formData.laminationCost = parseFloat(this.value) || 0;
    });

    document.getElementById('dieCost').addEventListener('input', function () {
        formData.dieCost = parseFloat(this.value) || 0;
    });

    document.getElementById('packetingCost').addEventListener('input', function () {
        formData.packetingCost = parseFloat(this.value) || 0;
    });

    document.getElementById('pastingCost').addEventListener('input', function () {
        formData.pastingCost = parseFloat(this.value) || 0;
    });

    document.getElementById('hotSpan').addEventListener('input', function () {
        formData.hotSpan = parseFloat(this.value) || 0;
    });
});

function updatePaperSizeDisplay() {
    if (formData.paperHeight > 0 && formData.paperWidth > 0) {
        const paperSizeText = `${formData.paperHeight}cm × ${formData.paperWidth}cm`;
        document.getElementById('paperSizeDisplay').value = paperSizeText;
    }
}

function goToSection(sectionNumber) {
    // Validate current section before proceeding
    if (sectionNumber === 2) {
        const productType = document.getElementById('productType').value;

        if (!productType) {
            alert('Please select a product type');
            return;
        }

        if (productType === 'Envelope') {
            // Validate envelope-specific fields
            const envelopeSides = document.getElementById('envelopeSides').value;
            const envelopeColoring = document.getElementById('envelopeColoring').value;
            const envelopeQuantity = document.getElementById('envelopeQuantity').value;
            const envelopeHeight = document.getElementById('envelopeHeight').value;
            const envelopeWidth = document.getElementById('envelopeWidth').value;

            if (!envelopeSides) {
                alert('Please select the number of sides');
                return;
            }

            if (!envelopeColoring) {
                alert('Please select a coloring option');
                return;
            }

            if (!envelopeQuantity || envelopeQuantity <= 0) {
                alert('Please enter a valid quantity');
                return;
            }

            if (!envelopeHeight || envelopeHeight <= 0 || !envelopeWidth || envelopeWidth <= 0) {
                alert('Please enter valid height and width');
                return;
            }

            // Store envelope data properly
            formData.paperType = 'Envelope';
        } else {
            // Validate standard paper fields
            const paperType = document.getElementById('paperType').value;
            const paperHeight = document.getElementById('paperHeight').value;
            const paperWidth = document.getElementById('paperWidth').value;
            const machineSize = document.getElementById('machineSize').value;
            const quantity = document.getElementById('quantity').value;

            if (!paperType) {
                alert('Please select paper type');
                return;
            }

            if (!paperHeight || paperHeight <= 0 || !paperWidth || paperWidth <= 0) {
                alert('Please enter valid paper height and width');
                return;
            }

            if (!machineSize) {
                alert('Please select machine size');
                return;
            }

            if (!quantity || quantity <= 0) {
                alert('Please enter a valid quantity');
                return;
            }
        }

        // Update displays
        document.getElementById('paperTypeDisplay').value = formData.paperType || formData.productType;
        updatePaperSizeDisplay();
        document.getElementById('machineSizeDisplay').value = formData.machineSize || 'N/A';
    }

    if (sectionNumber === 3) {
        const price = document.getElementById('price').value;
        const sheetPerPacket = document.getElementById('sheetPerPacket').value;

        if (!price || price <= 0 || !sheetPerPacket || sheetPerPacket <= 0) {
            alert('Please enter valid price and sheet per packet values');
            return;
        }
    }

    if (sectionNumber === 4) {
        // Validate all fields in section 3
        const printCost = document.getElementById('printCost').value;
        const laminationCost = document.getElementById('laminationCost').value;
        const dieCost = document.getElementById('dieCost').value;
        const packetingCost = document.getElementById('packetingCost').value;
        const pastingCost = document.getElementById('pastingCost').value;
        const hotSpan = document.getElementById('hotSpan').value;

        if (!printCost || !laminationCost || !dieCost || !packetingCost || !pastingCost || !hotSpan) {
            alert('Please fill in all cost fields');
            return;
        }

        // Calculate and display results
        calculateAndDisplayResults();
    }

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    document.getElementById(`section${sectionNumber}`).classList.add('active');

    // Update progress bar
    updateProgressBar(sectionNumber);
}

function updateProgressBar(activeStep) {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        if (index + 1 <= activeStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Store calculated values
let calculatedValues = {
    basePrice: 0,
    totalAdditionalCosts: 0,
    grandTotal: 0
};

function calculateAndDisplayResults() {
    // Calculate base price (price per packet * quantity)
    calculatedValues.basePrice = formData.price * formData.quantity;

    // Calculate total additional costs
    calculatedValues.totalAdditionalCosts =
        formData.printCost +
        formData.laminationCost +
        formData.dieCost +
        formData.packetingCost +
        formData.pastingCost +
        formData.hotSpan;

    // Calculate grand total
    calculatedValues.grandTotal = calculatedValues.basePrice + calculatedValues.totalAdditionalCosts;

    // Set invoice date
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('invoiceDate').textContent = `Date: ${dateStr}`;

    // Display results
    document.getElementById('resultPaperType').textContent = formData.paperType;
    const paperSizeText = `${formData.paperHeight}cm × ${formData.paperWidth}cm`;
    document.getElementById('resultPaperSize').textContent = paperSizeText;
    document.getElementById('resultMachineSize').textContent = formData.machineSize;
    document.getElementById('resultQuantity').textContent = formData.quantity;
    document.getElementById('resultSheetPerPacket').textContent = formData.sheetPerPacket;
    document.getElementById('resultBasePrice').textContent = formatCurrency(calculatedValues.basePrice);
    document.getElementById('resultPrintCost').textContent = formatCurrency(formData.printCost);
    document.getElementById('resultLaminationCost').textContent = formatCurrency(formData.laminationCost);
    document.getElementById('resultDieCost').textContent = formatCurrency(formData.dieCost);
    document.getElementById('resultPacketingCost').textContent = formatCurrency(formData.packetingCost);
    document.getElementById('resultPastingCost').textContent = formatCurrency(formData.pastingCost);
    document.getElementById('resultHotSpan').textContent = formatCurrency(formData.hotSpan);
    document.getElementById('resultTotal').textContent = formatCurrency(calculatedValues.grandTotal);
}

function calculateTotal() {
    // Legacy function - kept for compatibility
    calculateAndDisplayResults();

    // Hide current section and show results
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('resultsSection').style.display = 'block';
    document.getElementById('resultsSection').classList.add('active');
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function printInvoice() {
    window.print();
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - (margin * 2);

    // Set font
    doc.setFont('helvetica');

    // Title
    doc.setFontSize(18);
    doc.setTextColor(102, 126, 234);
    doc.text('Paper Price Invoice', pageWidth / 2, 25, { align: 'center' });

    // Date
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    doc.text(`Date: ${dateStr}`, pageWidth / 2, 32, { align: 'center' });

    // Line
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, 38, pageWidth - margin, 38);

    // Start position for content
    let yPos = 48;
    const lineHeight = 6;
    const sectionSpacing = 8;

    // Paper details section
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Paper Details:', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Paper Type: ${formData.paperType}`, margin + 5, yPos);
    yPos += lineHeight;
    const paperSizeText = `${formData.paperHeight}cm × ${formData.paperWidth}cm`;
    doc.text(`Paper Size: ${paperSizeText}`, margin + 5, yPos);
    yPos += lineHeight;
    doc.text(`Machine Size: ${formData.machineSize}`, margin + 5, yPos);
    yPos += lineHeight;
    doc.text(`Quantity: ${formData.quantity}`, margin + 5, yPos);
    yPos += lineHeight;
    doc.text(`Sheet per Packet: ${formData.sheetPerPacket}`, margin + 5, yPos);
    yPos += sectionSpacing;

    // Cost breakdown section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Cost Breakdown:', margin, yPos);
    yPos += lineHeight + 2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    const costs = [
        { label: 'Base Price', value: calculatedValues.basePrice },
        { label: 'Print Cost', value: formData.printCost },
        { label: 'Lamination Cost', value: formData.laminationCost },
        { label: 'Die Cost', value: formData.dieCost },
        { label: 'Packeting Cost', value: formData.packetingCost },
        { label: 'Pasting Cost', value: formData.pastingCost },
        { label: 'Hot Span', value: formData.hotSpan }
    ];

    // Create a table-like layout for costs
    costs.forEach(cost => {
        // Check if we're getting too close to the bottom
        if (yPos > pageHeight - 40) {
            // If content is too long, reduce spacing
            yPos -= 1;
        }

        const label = `${cost.label}:`;
        const value = formatCurrency(cost.value);

        doc.text(label, margin + 5, yPos);
        doc.text(value, pageWidth - margin - 5, yPos, { align: 'right' });
        yPos += lineHeight;
    });

    // Separator line before total
    yPos += 3;
    doc.setDrawColor(102, 126, 234);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 6;

    // Total - make it prominent
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(102, 126, 234);
    const totalLabel = 'Total Price:';
    const totalValue = formatCurrency(calculatedValues.grandTotal);

    // Draw background box for total
    doc.setFillColor(240, 240, 255);
    doc.setDrawColor(102, 126, 234);
    doc.setLineWidth(0.5);
    doc.rect(margin, yPos - 7, pageWidth - (margin * 2), 7, 'FD');

    doc.text(totalLabel, margin + 5, yPos);
    doc.text(totalValue, pageWidth - margin - 5, yPos, { align: 'right' });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text('Generated by Paper Price Calculator', pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Save PDF
    const fileName = `Paper_Invoice_${formData.paperHeight}x${formData.paperWidth}_${now.getTime()}.pdf`;
    doc.save(fileName);
}

function resetCalculator() {
    // Reset form data
    formData = {
        paperType: '',
        paperHeight: 0,
        paperWidth: 0,
        machineSize: '',
        quantity: 0,
        price: 0,
        sheetPerPacket: 0,
        printCost: 0,
        laminationCost: 0,
        dieCost: 0,
        packetingCost: 0,
        pastingCost: 0,
        hotSpan: 0
    };

    calculatedValues = {
        basePrice: 0,
        totalAdditionalCosts: 0,
        grandTotal: 0
    };

    // Reset all form fields
    document.getElementById('paperType').value = '';
    document.getElementById('paperHeight').value = '';
    document.getElementById('paperWidth').value = '';
    document.getElementById('machineSize').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
    document.getElementById('sheetPerPacket').value = '';
    document.getElementById('printCost').value = '';
    document.getElementById('laminationCost').value = '';
    document.getElementById('dieCost').value = '';
    document.getElementById('packetingCost').value = '';
    document.getElementById('pastingCost').value = '';
    document.getElementById('hotSpan').value = '';
    document.getElementById('paperTypeDisplay').value = '';
    document.getElementById('paperSizeDisplay').value = '';
    document.getElementById('machineSizeDisplay').value = '';

    // Hide results and go back to section 1
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('resultsSection').classList.remove('active');
    goToSection(1);
}


// ==================== Login Functionality ====================

// Check if user is already logged in
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showMainApp();
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');
    
    // Check credentials (admin/admin)
    if (username === 'admin' && password === 'admin123') {
        // Successful login
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        showMainApp();
    } else {
        // Failed login
        loginError.style.display = 'block';
        document.getElementById('loginPassword').value = '';
        document.getElementById('loginUsername').focus();
        
        // Shake animation trigger
        setTimeout(() => {
            loginError.style.display = 'block';
        }, 100);
    }
    
    return false;
}

// Show main application and hide login
function showMainApp() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
}

// Logout function (optional - can be called from anywhere)
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    document.getElementById('loginOverlay').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').style.display = 'none';
}

// Check login status when page loads
window.addEventListener('load', checkLogin);

// Enhanced Enter key handling for login inputs
document.addEventListener('DOMContentLoaded', function() {
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');
    
    if (loginUsername && loginPassword) {
        // Add Enter key listener to username field
        loginUsername.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                // If username is filled, move to password field
                if (this.value) {
                    loginPassword.focus();
                }
            }
        });
        
        // Add Enter key listener to password field
        loginPassword.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                // Submit the form
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
        });
    }
});
