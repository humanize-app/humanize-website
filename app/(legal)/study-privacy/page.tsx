import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSummaryBox,
  LegalUpdated,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Study Privacy Policy",
  description:
    "How Humanize handles Personal Data from individuals who participate in AI-moderated research Studies.",
  alternates: { canonical: "/study-privacy" },
};

export default function StudyPrivacyPage() {
  return (
    <LegalPage>
      <h1>Study Privacy Policy</h1>
      <LegalUpdated>
        <strong>Last Updated: February 19, 2026</strong>
      </LegalUpdated>
      <p>
        This policy applies to individuals who participate in a Humanize
        AI-moderated research focus group or interview (each, a
        &ldquo;Study&rdquo;). For information about how we handle data from
        website visitors and customers, please see our{" "}
        <Link href="/privacy-policy">Website Privacy Policy</Link>.
      </p>

      <LegalSummaryBox>
        <h2>What you need to know</h2>
        <ul>
          <li>
            <strong>Your Study is moderated by an AI, not a human.</strong> The
            moderator you interact with is an artificial intelligence system.
            There is no human moderator present during the session.
          </li>
          <li>
            <strong>Your session will be recorded and analyzed.</strong> We
            collect your audio and/or video responses, which are transcribed and
            analyzed using AI. The analysis includes emotional signals inferred
            from your words, your tone of voice, and your facial expressions.
          </li>
          <li>
            <strong>Your Study may be a group session.</strong> If so, other
            participants will hear what you say. We cannot guarantee that other
            participants will keep the discussion confidential.
          </li>
          <li>
            <strong>A research client is receiving your insights.</strong> The
            Study may be commissioned by a Humanize customer (&ldquo;Research
            Client&rdquo;). Your responses — including transcripts and
            AI-generated analysis — will be shared with that Research Client.
          </li>
          <li>
            Research Clients must follow our Acceptable Use Policy and may only
            use your responses for authorized research purposes.
          </li>
          <li>
            Your personal data is protected by industry-standard security
            measures.
          </li>
          <li>
            You can exercise your privacy rights at any time. To access,
            correct, or delete your data, or for any questions, contact us at{" "}
            <a href="mailto:orr@humanize.app">orr@humanize.app</a>.
          </li>
        </ul>
      </LegalSummaryBox>

      <hr />

      <h2>1. What This Policy Covers &amp; Contact Information</h2>
      <p>
        Humanize provides an AI-powered qualitative research platform that enables
        brands and organizations to conduct focus groups and interviews. This
        Study Privacy Policy (&ldquo;Policy&rdquo;) details how we collect and
        process personal data from individuals who participate in our Studies
        (&ldquo;Participants&rdquo;). &ldquo;Personal Data&rdquo; means any
        information that identifies or relates to a particular individual.
      </p>
      <p>
        This Policy applies only to your participation in a Study. For
        information about how we handle data from website visitors and
        customers, please see our{" "}
        <Link href="/privacy-policy">Website Privacy Policy</Link>.
      </p>
      <p>
        If you have questions or concerns about this Policy or your Personal
        Data, please contact our Data Protection Officer:
      </p>
      <p>
        <strong>Data Protection Officer:</strong>
        <br />
        Orr Matarasso
        <br />
        300 West 57th Street, 41st Floor
        <br />
        New York, NY 10019
        <br />
        United States
        <br />
        orr@humanize.app
      </p>

      <h2>2. Personal Data We Collect</h2>
      <p>When you participate in a Study, we may collect:</p>
      <h3>2.1 Screening Data</h3>
      <p>
        Information you provide during the screening and recruitment process,
        such as your name, email address, demographic information, and
        responses to qualifying questions. This data helps us determine your
        eligibility for a Study.
      </p>
      <h3>2.2 Session Data</h3>
      <p>
        Audio and/or video recordings, transcripts, and any responses you
        provide during the Study. These may include Personal Data you choose to
        share during the conversation.
      </p>
      <h3>2.3 Technical Data</h3>
      <p>
        IP address, device information, browser settings, and connection data
        to ensure a stable and secure session experience.
      </p>
      <h3>2.4 Scheduling &amp; Contact Data</h3>
      <p>
        Name, email address, phone number, and scheduling preferences used to
        coordinate your participation.
      </p>

      <h2>3. How We Use Your Personal Data</h2>
      <p>We collect and use your Personal Data for the following purposes:</p>
      <ul>
        <li>
          <strong>Conduct the Study:</strong> Record, transcribe, process, and
          analyze your responses to generate research insights for the Research
          Client who commissioned the Study.
        </li>
        <li>
          <strong>AI-Powered Analysis:</strong> Use artificial intelligence to
          transcribe your responses, identify themes and patterns, and generate
          structured research insights. This analysis is performed
          automatically and may involve multiple stages of AI processing.
        </li>
        <li>
          <strong>Manage Your Participation:</strong> Schedule sessions, send
          reminders, process compensation, and communicate with you about the
          Study.
        </li>
        <li>
          <strong>Service Improvement:</strong> Use aggregated, de-identified,
          or anonymized data to improve our platform&rsquo;s functionality and
          overall research quality.
        </li>
        <li>
          <strong>Legal Compliance:</strong> Comply with applicable laws,
          regulations, and legal obligations.
        </li>
      </ul>

      <h2>4. How We Share Your Personal Data</h2>
      <p>
        We do not sell your Personal Data to third parties or use it for
        advertising or targeted marketing. We share your Personal Data only
        with:
      </p>
      <ul>
        <li>
          <strong>The Research Client:</strong> The organization that
          commissioned the Study. Research Clients receive your responses,
          transcripts, AI-generated analysis, and insights. Research Clients
          are contractually required to use your data only for authorized
          research purposes and to implement appropriate safeguards to protect
          your Personal Data.
        </li>
        <li>
          <strong>Service Providers:</strong> Third-party companies that help
          us deliver the Services, such as cloud hosting, audio/video
          processing, and transcription services. These providers process your
          data only on our behalf and under our instructions.
        </li>
        <li>
          <strong>Other Participants:</strong> If the Study is conducted in a
          group format, other participants in the session will hear your
          responses in real time. See Section 6 (Group Session Disclosure)
          below.
        </li>
        <li>
          <strong>Legal Authorities:</strong> If required by law, court order,
          or to protect the rights, property, or safety of Humanize, our users, or
          others.
        </li>
      </ul>

      <h2>5. AI Processing Disclosure</h2>
      <p>
        Your Study is moderated by an artificial intelligence system, not a
        human moderator. The AI moderator facilitates the conversation, asks
        questions, and guides the discussion.
      </p>
      <p>Your responses undergo the following AI processing:</p>
      <ol>
        <li>
          <strong>Real-time moderation</strong> — the AI moderator processes
          your responses during the session to guide the conversation.
        </li>
        <li>
          <strong>Transcription</strong> — your audio/video is transcribed into
          text using AI-powered speech recognition.
        </li>
        <li>
          <strong>Analysis</strong> — AI systems analyze your responses,
          including the transcript of what you say, your tone of voice, and your
          facial expressions, to extract themes, patterns, and emotional
          signals, and to generate research insights. These emotional signals
          are approximate indicators for researchers to interpret, not
          definitive measurements.
        </li>
        <li>
          <strong>Insight delivery</strong> — structured analysis is delivered
          to the Research Client through our platform.
        </li>
      </ol>
      <p>
        No fully automated decisions with legal or similarly significant
        effects are made about you based on your Study responses. The AI
        processing is used solely to generate qualitative research insights, and
        we do not use your responses to train AI models.
      </p>
      <p>
        By participating in the Study, you consent to this AI-mediated
        interaction and processing.
      </p>

      <h2>6. Group Session Disclosure</h2>
      <p>
        Studies may be conducted in a group format (&ldquo;focus group&rdquo;)
        with multiple participants present simultaneously. If you are in a
        group session:
      </p>
      <ul>
        <li>
          Other participants will hear your responses in real time during the
          session.
        </li>
        <li>
          Humanize cannot guarantee confidentiality of what is discussed, as we
          cannot control what other participants do with information they hear
          during the session.
        </li>
        <li>
          Do not share information that you would not want other participants
          to hear.
        </li>
        <li>
          Transcripts and analysis shared with the Research Client will include
          responses from all participants in the session.
        </li>
      </ul>
      <p>
        Your participation in a group session constitutes your acknowledgment
        and acceptance of these limitations.
      </p>

      <h2>7. Third-Party Recruitment</h2>
      <p>
        You may have been recruited to participate in this Study through a
        third-party platform (e.g., Prolific, Craigslist, or other recruitment
        channels). Regardless of how you were recruited:
      </p>
      <ul>
        <li>
          This Policy governs how Humanize handles your Personal Data during and
          after the Study.
        </li>
        <li>
          Consent provided to a recruitment platform does not substitute for
          the consent you provide to Humanize. By joining a Study, you consent to
          the data collection and processing described in this Policy.
        </li>
        <li>
          The recruitment platform&rsquo;s own terms and privacy policies
          continue to apply to your relationship with that platform separately.
        </li>
      </ul>

      <h2>8. Data Storage, Transfers, and Retention</h2>
      <h3>Storage</h3>
      <p>
        We store your Personal Data on servers located in the United States. We
        implement appropriate technical and organizational safeguards to
        protect your data.
      </p>
      <h3>International Transfers</h3>
      <p>
        If you participate from outside the United States, your Personal Data
        will be transferred to the U.S. We rely on lawful transfer mechanisms
        (such as standard contractual clauses) to ensure adequate protection
        for international data transfers.
      </p>
      <h3>Retention</h3>
      <p>
        We retain your Personal Data for the period defined by the Research
        Client or as required by law. If no retention period is specified, we
        keep your Personal Data only as long as reasonably necessary for
        research delivery, platform improvement (in aggregated/de-identified
        form), and legal compliance.
      </p>
      <p>
        You can request deletion of your Personal Data by contacting
        orr@humanize.app. We will process your request in accordance with
        applicable law, though certain data may need to be retained for legal
        or compliance reasons.
      </p>

      <h2>9. Your Rights and Choices</h2>
      <p>
        Depending on your location and applicable law (e.g., GDPR, CCPA/CPRA),
        you may have rights including:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request access to the Personal Data we hold
          about you.
        </li>
        <li>
          <strong>Correction:</strong> Update or correct inaccuracies in your
          Personal Data.
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your Personal Data
          where legally permitted.
        </li>
        <li>
          <strong>Objection/Restriction:</strong> Object to or restrict certain
          data processing activities.
        </li>
        <li>
          <strong>Data Portability:</strong> Receive a copy of your Personal
          Data in a structured, commonly used format.
        </li>
        <li>
          <strong>Withdraw Consent:</strong> You may withdraw your consent to
          data processing at any time. Withdrawal does not affect the
          lawfulness of processing that occurred before withdrawal.
        </li>
        <li>
          <strong>Non-Discrimination:</strong> We will not discriminate against
          you for exercising your privacy rights.
        </li>
      </ul>
      <p>
        To exercise these rights, contact orr@humanize.app. We will respond
        within the timeframe required by applicable law.
      </p>
      <p>
        <strong>Note:</strong> If you withdraw consent or request deletion
        before a Study is complete, we may not be able to include your
        responses in the research deliverable, and this may affect your
        eligibility for compensation.
      </p>

      <h2>10. Security Measures</h2>
      <p>
        We use industry-standard security measures, including encryption,
        access controls, and monitoring, to protect your Personal Data. While
        we cannot guarantee absolute security, we continuously work to maintain
        and improve our safeguards.
      </p>

      <h2>11. Children&rsquo;s Data</h2>
      <p>
        Our Services, including Studies, are not intended for children. We do
        not knowingly collect personal data from individuals under the age of
        18. If you believe we have inadvertently collected data from someone
        under 18, please contact us immediately to request deletion.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time to reflect changes in our
        practices or legal requirements. If we make material changes affecting
        how we handle your Personal Data, we will update the &ldquo;Last
        Updated&rdquo; date and, where required by law, obtain additional
        consent. Continued participation in Studies after changes have been
        posted indicates your acknowledgment of the updated terms.
      </p>

      <h2>13. Questions, Concerns, or Complaints</h2>
      <p>
        If you have questions about this Policy or concerns about how we handle
        your Personal Data, please contact:
      </p>
      <p>
        <strong>Humanize</strong>
        <br />
        Attn: Orr Matarasso, Data Protection Officer
        <br />
        300 West 57th Street, 41st Floor
        <br />
        New York, NY 10019
        <br />
        United States
        <br />
        orr@humanize.app
      </p>
      <p>
        If you are in the EU or UK, you may also have the right to lodge a
        complaint with your local data protection authority.
      </p>
    </LegalPage>
  );
}
