import MaskText from "@/components/maskText";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";

import Plant from "../assets/privacy/plant.jpg";

const dataprotection = [
  {
    id: 1,
    text: `This Data Protection Notice (“<strong>Notice</strong>”) sets out the basis which <strong>XIAOMI</strong> (“we”, “us”, or “our”) may collect, use, disclose or otherwise process personal data of our customers in accordance with the Personal Data Protection Act (“<strong>PDPA</strong>”). This Notice applies to personal data in our possession or under our control, including personal data in the possession of organisations which we have engaged to collect, use, disclose or process personal data for our purposes.`,
  },
];

const personal1 = [
  {
    id: 1,
    text: " As used in this Notice:",
  },
  {
    id: 2,
    text: " (“<strong>customer</strong>”) means an individual who (a) has contacted us through any means to find out more about any goods or services we provide, or (b) may, or has, entered into a contract with us for the supply of any goods or services by us; and",
  },
  {
    id: 3,
    text: " (“<strong>personal data</strong>”) means data, whether true or not, about a customer who can be identified: (a) from that data; or (b) from that data and other information to which we have or are likely to have access.",
  },
];

const personal2 = [
  {
    id: 2,
    text: "Depending on the nature of your interaction with us, some examples of personal data which we may collect from you include name, residential address, email address and telephone number.",
  },
  {
    id: 3,
    text: "Other terms used in this Notice shall have the meanings given to them in the PDPA (where the context so permits).",
  },
];

const collection1 = [
  {
    id: 4,
    text: " We generally do not collect your personal data unless (a) it is ",
  },
  {
    id: 5,
    text: "provided to us voluntarily by you directly or via a third party who has been duly authorised by you to disclose your personal data to us (your “authorised representative”) after (i) you (or your authorised representative) have been notified of the purposes for which the data is collected, and (ii) you (or your authorised representative) have provided written consent to the collection and usage of your personal data for those purposes, or (b) collection and use of personal data without consent is permitted or required by the PDPA or other laws. We shall seek your consent before collecting any additional personal data and before using your personal data for a purpose which has not been notified to you (except where permitted or authorised by law).",
  },
];

const collection2 = [
  {
    id: 5,
    text: "We may collect and use your personal data for any or all of the  following purposes:",
  },
  {
    id: 6,
    text: "(a)            performing obligations in the course of or in connection with our provision of the goods and/or services requested by you;",
  },
  {
    id: 7,
    text: "(b)            responding to, handling, and processing queries, requests, applications, complaints, and feedback from you;",
  },
  {
    id: 8,
    text: "(c)            managing your relationship with us;",
  },
  {
    id: 9,
    text: "(d)            processing payment or credit transactions;",
  },
  {
    id: 10,
    text: "(e)            complying with any applicable laws, regulations, codes of practice, guidelines, or rules, or to assist in law enforcement and investigations conducted by any governmental and/or regulatory authority;",
  },
  {
    id: 11,
    text: "(f)             any other purposes for which you have provided the information; and",
  },
  {
    id: 12,
    text: "(g)            transmitting to any unaffiliated third parties including our third party service providers and agents, and relevant governmental and/or regulatory authorities, whether in Singapore or abroad, for the aforementioned purposes.",
  },
];
const collection3 = [
  {
    id: 6,
    text: "We may disclose your personal data:",
  },
  {
    id: 7,
    text: "(a)            where such disclosure is required for performing obligations in the course of or in connection with our provision of the goods and services requested by you; or",
  },
  {
    id: 8,
    text: "(b)            to third party service providers, agents and other organisations we have engaged to perform any of the functions with reference to the above mentioned purposes.",
  },
];
const collection4 = [
  {
    id: 7,
    text: "The purposes listed in the above clauses may continue to apply even in situations where your relationship with us (for example, pursuant to a contract) has been terminated or altered in any way, for a reasonable period thereafter (including, where applicable, a period to enable us to enforce our rights under a contract with you).",
  },
];

const withdraw = [
  {
    id: 8,
    text: "The  consent  that  you  provide  for  the  collection,  use  and disclosure of your personal data will remain valid until such time it is being withdrawn by you in writing. You may withdraw consent and request us to stop collecting, using and/or disclosing your personal data for any or all of the purposes listed above by submitting your request in writing or via email to our Data Protection Officer at the contact details provided below.",
  },
  {
    id: 9,
    text: "Upon receipt of your written request to withdraw your consent, we may require reasonable time (depending on the complexity of the request and its impact on our relationship with you) for your request to be processed and for us to notify you of the consequences of us acceding to the same, including any legal consequences which may affect your rights and liabilities to us. In general, we shall seek to process your request within ten (10) business days of receiving it.",
  },
  {
    id: 10,
    text: "Whilst  we  respect  your  decision  to  withdraw  your consent, please note that depending on the nature and scope of your request, we may not be in a position to continue providing our goods or services to you and we shall, in such circumstances, notify you before completing the processing of your request. Should you decide to cancel your withdrawal of consent, please inform us in writing in the manner described in clause 8 above.",
  },
  {
    id: 11,
    text: "Please  note  that  withdrawing  consent  does  not  affect  our right to continue to collect, use and disclose personal data where such collection, use and disclose without consent is permitted or required under applicable laws.",
  },
];

const access = [
  {
    id: 12,
    text: " If you wish to make (a) an access request for access to a copy of the personal data which we hold about you or information about the ways in which we use or disclose your personal data, or (b) a correction request to correct or update any of your personal data which we hold about you, you may submit your request in writing or via email to our Data Protection Officer at the contact details provided below.",
  },
  {
    id: 13,
    text: "Please  note  that  a  reasonable  fee  may  be  charged  for  an access request. If so, we will inform you of the fee before processing your request.",
  },
  {
    id: 14,
    text: " We  will   respond   to   your   request   as  soon  as  reasonably possible. In general, our response will be within fifteen (15) business days. Should we not be able to respond to your request within thirty (30) days after receiving your request, we will inform you in writing within thirty (30) days of the time by which we will be able to respond to your request. If we are unable to provide you with any personal data or to make a correction requested by you, we shall generally inform you of the reasons why we are unable to do so (except where we are not required to do so under the PDPA).",
  },
];

const protection = [
  {
    id: 15,
    text: " To  safeguard your  personal  data from  unauthorised  access, collection, use, disclosure, copying, modification, disposal or similar risks, we have introduced appropriate administrative, physical and technical measures such as minimised collection of personal data, authentication and access controls (such as good password practices, need-to-basis for data disclosure, etc.), encryption of data, data anonymisation, up-to-date antivirus protection, regular patching of operating system and other software, and security review and testing performed regularly.",
  },
  {
    id: 16,
    text: "You should be aware, however, that no method of transmission over the Internet or method of electronic storage is completely secure. While security cannot be guaranteed, we strive to protect the security of your information and are constantly reviewing and enhancing our information security measures.",
  },
];

const accuracy = [
  {
    id: 17,
    text: " We  generally  rely  on  personal data provided by you (or  your authorised representative). In order to ensure that your personal data is current, complete and accurate, please update us if there are changes to your personal data by informing our Data Protection Officer in writing or via email at the contact details provided below.",
  },
];

const retention = [
  {
    id: 18,
    text: "  We may retain your personal data for as long as it is necessary to fulfil the purpose for which it was collected, or as required or permitted by applicable laws. ",
  },
  {
    id: 19,
    text: " We  will  cease  to  retain  your  personal  data,  or  remove  the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purpose for which the personal data was collected, and is no longer necessary for legal or business purposes.",
  },
];

const transfers = [
  {
    id: 20,
    text: " We  generally  do  not  transfer your personal data to countries outside of Singapore. However, if we do so, we will obtain your consent for the transfer to be made and we will take steps to ensure that your personal data continues to receive a standard of protection that is at least comparable to that provided under the PDPA.",
  },
];

const officer = [
  {
    id: 21,
    text: " You  may  contact  our  Data  Protection Officer if you have any enquiries or feedback on our personal data protection policies and procedures, or if you wish to make any request, in the following manner:",
  },
];

const contacts = [
  {
    id: 1,
    text: " Contact No.      : 81234567 ",
  },
  {
    id: 2,
    text: " Email Address  : mi@gmail.com",
  },
];

const changes = [
  {
    id: 22,
    text: "This   Notice   applies   in  conjunction  with  any  other  notices, contractual clauses and consent clauses that apply in relation to the collection, use and disclosure of your personal data by us.",
  },
  {
    id: 23,
    text: " We  may  revise  this  Notice from time to time without any prior notice. You may determine if any such revision has taken place by referring to the date on which this Notice was last updated. Your continued use of our services constitutes your acknowledgement and acceptance of such changes.",
  },
];
const effective = [
  {
    id: 1,
    text: " Effective date  :           05/11/2024",
  },
  {
    id: 2,
    text: " Last updated   :           05/11/2024",
  },
];

const hiddenIdsPersonal1 = [2, 3];
const hiddenIdscolection1 = [5];
const hiddenIdscolection2 = [6, 7, 8, 9, 10, 11, 12];
const hiddenIdscolection3 = [7, 8];

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we collect, use, and protect your data. Your privacy is important to us. Learn more about our commitment to security."
        />
      </Helmet>
      <main className="flex size-full flex-col items-start justify-start gap-48">
        {/* Splash */}
        <div
          className="relative h-80 w-full bg-cover bg-center md:px-16"
          style={{ backgroundImage: `url(${Plant})` }}
        >
          <div className="flex size-full items-center justify-center px-4 py-6 md:py-48">
            <div className="z-10 mb-4 mt-4 flex max-w-2xl flex-col items-start gap-6 text-left">
              <MaskText variant="header" text="Our Privacy Policy" />
              <div className="flex flex-col gap-4"></div>
            </div>
          </div>
        </div>

        {/*Data Protection Notice*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Data Protection Notice"
            className="mb-12 text-left"
          />

          {/* Data Protection Text */}
          <div className="space-y-6">
            {dataprotection.map((policy) => (
              <div key={policy.id}>
                <MiText>
                  <span dangerouslySetInnerHTML={{ __html: policy.text }} />
                </MiText>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Data */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Personal Data"
            className="mb-12 text-left"
          />

          {/* Personal Data Text */}
          <div className="space-y-6">
            {personal1.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>
                  {!hiddenIdsPersonal1.includes(policy.id) ? (
                    `${policy.id}.`
                  ) : (
                    <span className="invisible">1.</span>
                  )}
                </MiText>
                <MiText>
                  <span dangerouslySetInnerHTML={{ __html: policy.text }} />
                </MiText>
              </div>
            ))}

            {personal2.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>
                  <span dangerouslySetInnerHTML={{ __html: policy.text }} />
                </MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/* Collection */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Collection, Use and Disclosure of Personal Data"
            className="mb-12 text-left"
          />

          {/* Collection Text */}
          <div className="space-y-6">
            {/*1*/}
            {collection1.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>
                  {!hiddenIdscolection1.includes(policy.id) ? (
                    `${policy.id}.`
                  ) : (
                    <span className="invisible">1.</span>
                  )}
                </MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
            {/*2*/}
            {collection2.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>
                  {!hiddenIdscolection2.includes(policy.id) ? (
                    `${policy.id}.`
                  ) : (
                    <span className="invisible">1.</span>
                  )}
                </MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
            {/*3*/}
            {collection3.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>
                  {!hiddenIdscolection3.includes(policy.id) ? (
                    `${policy.id}.`
                  ) : (
                    <span className="invisible">1.</span>
                  )}
                </MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}

            {/*4*/}
            {collection4.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/* Withdrawing */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Withdrawing Your Consent"
            className="mb-12 text-left"
          />

          {/* Collection Text */}
          <div className="space-y-6">
            {/*1*/}
            {withdraw.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Access to and Correction */}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Access to and Correction of Personal Data"
            className="mb-12 text-left"
          />

          {/* Access Text */}
          <div className="space-y-6">
            {/*1*/}
            {access.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Protection of Personal Data*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Protection of Personal Data"
            className="mb-12 text-left"
          />

          {/* Access Text */}
          <div className="space-y-6">
            {/*1*/}
            {protection.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Accuracy*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Accuracy of Personal Data"
            className="mb-12 text-left"
          />

          {/* Accuracy Text */}
          <div className="space-y-6">
            {/*1*/}
            {accuracy.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Retention*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Retention of Personal Data"
            className="mb-12 text-left"
          />

          {/* Retention Text */}
          <div className="space-y-6">
            {/*1*/}
            {retention.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Transfers*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Transfers of Personal Data Outside of Singapore"
            className="mb-12 text-left"
          />

          {/* Transfers Text */}
          <div className="space-y-6">
            {/*1*/}
            {transfers.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Data Protection Officer*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Data Protection Officer"
            className="mb-12 text-left"
          />

          {/* Data Protection Text */}
          <div className="space-y-6">
            {/*1*/}
            {officer.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-6">
            {contacts.map((policy) => (
              <div key={policy.id}>
                {/* Render HTML */}
                <MiText>
                  <span dangerouslySetInnerHTML={{ __html: policy.text }} />
                </MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>

        {/*Changes*/}
        <section className="mx-auto max-w-5xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Effect of Notice and Changes to Notice"
            className="mb-12 text-left"
          />

          {/* Changes Text */}
          <div className="space-y-6">
            {/*1*/}
            {changes.map((policy) => (
              <div key={policy.id} className="flex gap-12">
                <MiText>{policy.id}.</MiText>
                <MiText>{policy.text}</MiText>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-6">
            {effective.map((policy) => (
              <div key={policy.id}>
                <MiText>
                  <span dangerouslySetInnerHTML={{ __html: policy.text }} />
                </MiText>
              </div>
            ))}
          </div>

          <div className="space-y-6"></div>
        </section>
      </main>
    </>
  );
};

export default Privacy;
