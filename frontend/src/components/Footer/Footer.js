import {
  FooterSection,
  FooterContainer,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterText,
  FooterNewsletterForm,
  FooterNewsletterInput,
  FooterBtn,
  FooterLinkContainer,
  FooterLinks,
  FooterLinkTitle,
  FooterText,
  FooterLink,
  FooterCopyRight,
  FooterLabel
} from './Footer.styles';
function Footer() {
  return (
      <div>
          <FooterSection>
              <FooterContainer>
                  <FooterNewsletter>
                      <FooterNewsletterTitle>Join us high quality and new musics</FooterNewsletterTitle>
                      <FooterNewsletterText>You found new musics every day</FooterNewsletterText>
                  </FooterNewsletter>
                  <FooterLinkContainer>
                          <FooterLinks>
                              <FooterLinkTitle>Services to you</FooterLinkTitle>
                              <FooterText >👉 music lists</FooterText>
                              <FooterText >👉 Post yor favorite music</FooterText>
                              <FooterText >👉 Entertain on the musics</FooterText>
                          </FooterLinks>

                          <FooterLinks>
                              <FooterLinkTitle>Contact</FooterLinkTitle>
                              <FooterNewsletterForm>
                          <FooterLabel htmlFor="email">Email address</FooterLabel>
                         <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                         <FooterBtn>Submit</FooterBtn>
                      </FooterNewsletterForm>
                              <FooterLink to='/'>Instagram</FooterLink>
                              <FooterLink to='/'>Facebook</FooterLink>
                              <FooterLink to='/'>Linkedin</FooterLink>
                          </FooterLinks>
                  </FooterLinkContainer>
                  <FooterCopyRight to='#'> &copy; Copyright 2023, Designed and coded with 💛 by AT(myself)</FooterCopyRight>
              </FooterContainer>
          </FooterSection>

      </div>
  )
}

export default Footer;