import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

export default function FaqPage() {
  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <p
        style={{
          color: "#9B1FE9",
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "4rem",
          fontSize: "2rem",
        }}
      >
        Frequently Asked Questions
      </p>
      <Container style={{ padding: "1rem" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What is a blockchain oracle?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A blockchain oracle is any system that services a smart contract
              by providing it with data from an off-chain source or connecting
              it with an off-chain system. Oracles enable connectivity between
              blockchains and real-world data by interfacing with external APIs
              and data feeds, allowing them to pull data for or push data from a
              smart contract.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Why do blockchains need oracles?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Oracles enable smart contracts to interact with off-chain
              resources. Without oracles, smart contracts can only access data
              within a blockchain, severely limiting their potential
              applications. The majority of industry-changing real-world use
              cases for smart contracts require off-chain data and computation
              for proper execution and often an integration with existing
              payment rails to settle a contract. For example, a smart contract
              may require high-quality weather data from a reputable source like
              AccuWeather to trigger a transaction. It may also require the
              ability to pay out escrowed fiat currency through existing
              financial infrastructure, such as a bank checking account.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>What is the Chainlink Network?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Chainlink Network refers to all of the decentralized oracle
              networks actively operating using the Chainlink protocol,
              including individual oracles, data providers running their own
              node, and node operators. By enabling smart contracts to quickly
              and securely connect to off-chain data sources using decentralized
              oracle networks, the Chainlink Network helps developers build more
              robust and diverse blockchain applications using real-world inputs
              and outputs. Additionally, as middleware between low-level
              blockchain protocols and external, off-chain data sources, the
              Chainlink Network serves as an abstraction layer for data
              providers to easily sell their existing APIs to any blockchain
              network.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography>
              Where can I explore the performance and reliability of the
              Chainlink Network?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Chainlink Price Feeds page provides real-time visualizations
              of each decentralized price feed that provides on-chain exchange
              rates for cryptocurrencies, stablecoins, commodities, and indices.
              Users can explore each individual price feed, which offers
              transparency around which nodes power each feed, each node’s
              latest response, how often feed updates occur, the gas price paid
              by each node, the users sponsoring each feed, and hyperlinks to
              on-chain transactions.requests, average response times, and more.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography>
              What is Chainlink Verifiable Random Function (VRF)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Chainlink VRF brings secure random number generation to the
              blockchain. Chainlink VRF solves the difficult problem of
              providing an on-chain source of randomness that is publicly
              verifiable to be authentic and tamper-proof. Many smart contracts
              are augmenting the value they can create by utilizing Chainlink
              VRF, specifically applications such as gaming dApps that must
              prove to their users that their source of randomness is provably
              fair and resistant to manipulation from any external entity.
              Chainlink VRF enables and accelerates the development of smart
              contracts focused on blockchain gaming, security, layer-two
              protocols, and various other use cases
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <Typography>What is Chainlink Proof of Reserve?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Chainlink Proof of Reserve provides smart contracts with the data
              required to calculate the true collateralization of any on-chain
              asset backed by off-chain reserves such as stablecoins and
              cross-chain assets. Operated by a decentralized network of
              oracles, Chainlink Proof of Reserve enables the autonomous
              auditing of collateral used within DeFi in real-time, ensuring
              users’ funds are protected from unforeseen fractional reserve
              practices and other fraudulent activity from off-chain custodians.
              This provides both the growing DeFi ecosystem and the traditional
              financial system a way to increase the transparency of operations
              with definitive on-chain proof of any asset’s true
              collateralization.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography>
              How do I keep up with current protocol development?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Chainlink development team is continuously building the
              network and protocol. To keep up to date with current progress you
              can follow the Chainlink Github. You can find a full list of open
              roles on the Chainlink Labs careers page.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8-content"
            id="panel8-header"
          >
            <Typography>
              How can I reach out to Chainlink for support?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For inquiries related to security and support, please reach out to
              the admins of official Chainlink channels or email
              support@chain.link‍. You can also find more technical information
              in the documentation. Always practice a security mindset and
              ensure that users you are interacting with on community channels
              have verifiable trusted identities. You can confirm the accounts
              of official Chainlink community admin by clicking their names in
              the chat or viewing their handles under the official channel info.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9-content"
            id="panel8-header"
          >
            <Typography>How do I participate in building Chainlink?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are numerous projects working on the development of the
              Chainlink ecosystem, including Chainlink Labs. You can find a full
              list of open roles on the Chainlink Labs careers page.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
