function Contact() {
    return (

        <section class="space contact-sec">
            <div class="container">
                <div class="page-top">
                    <h1 class="page-title">Contact Our Team</h1>
                    <p class="page-text">Odio enim adipiscing adipiscing viverra nunc aenean mi, justo.
                         Ornare non condimentum cursus ornare diam. Nullam aliquet ipsum tortor sed.
                         
                         </p>
                </div>
                <form action="#" class="contact-form">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" name="lastName" id="lastName" placeholder="Last Name" />
                        </div>
                        <div class="form-group col-12">
                            <input type="number" class="form-control" name="number" id="number" placeholder="Phone Number" />
                        </div>
                        <div class="form-group col-12">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" />
                        </div>
                        <div class="form-group col-12">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div class="form-group col-12">
                            <textarea name="message" id="message" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <div class="form-btn col-12">
                            <button class="ot-btn style2">Send Message</button>
                        </div>
                    </div>
                    <p class="form-messages mb-0 mt-3"></p>
                </form>
            </div>
            <div class="shape-mockup jump-reverse d-none d-lg-block" data-top="22%" data-left="3%"><img src="/assets/img/normal/dots_1.svg" alt="shapes" /></div>
            <div class="shape-mockup jump-reverse d-none d-lg-block" data-top="22%" data-right="3%"><img src="/assets/img/normal/dots_1.svg" alt="shapes" /></div>
        </section>

    )
}

export default Contact;