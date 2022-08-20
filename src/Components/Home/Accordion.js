import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function AccordionDef() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="lg:mx-52 md:mx-20 mx-12">
            <h1 className='text-5xl font-extrabold text-violet-400 text-center mb-5'>FAQ</h1>
            <Fragment>
                <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                    <AccordionHeader>Q. How much does it cost to rent in Dhaka?</AccordionHeader>
                    <AccordionBody>
                        A: This depends on the apartment type and location. The average cost to rent a 2 bedroom flat is estimated at around 12500 BDT.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader>
                        Q. How much does it cost to rent a luxury fully furnished apartment in Baridhara?</AccordionHeader>
                    <AccordionBody>
                        It can cost 200000 BDT to 350000 BDT depending on the furnishings.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader>
                        Q. How much does it cost to rent a 16000 square fit full building for rent in Dhaka?
                    </AccordionHeader>
                    <AccordionBody>
                        You need to spend nearly 1500000 BDT. The cost varies considering different areas and building facilities.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} onClick={() => handleOpen(4)}>
                    <AccordionHeader>
                        Q. Are television, refrigerator, and washing machines included with a fully furnished apartment?
                    </AccordionHeader>
                    <AccordionBody>
                        Some fully furnished apartments come with a television, refrigerator, and washing machines. You have to talk to the owner to ensure that.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} onClick={() => handleOpen(5)}>
                    <AccordionHeader>
                        Q. What are some common furnishings of a furnished apartment?
                    </AccordionHeader>
                    <AccordionBody>
                        Chair, Table, Bed, Sofa, Fridge are some furnishings of a furnished apartment.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} onClick={() => handleOpen(6)}>
                    <AccordionHeader>
                        Q. What is the average rent of a furnished apartment in Dhaka?
                    </AccordionHeader>
                    <AccordionBody>
                        You have to spend 75000 BDT to 150000 BDT depends on the apartment facilities.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} onClick={() => handleOpen(7)}>
                    <AccordionHeader>
                        Q. What are the best places to rent and live in Dhaka?
                    </AccordionHeader>
                    <AccordionBody>
                        A: Dhanmondi, Gulshan, Banani, Baridhara and Uttara are some of the top places to rent and live in Dhaka.
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
}