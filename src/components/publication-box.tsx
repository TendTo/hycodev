import styles from "../../scss/components/publication-box.module.scss";
import Image from "next/image";
import typography from "../../scss/base/_typography.module.scss";
import utilities from "../../scss/base/_utilities.module.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { EditIcon, TimeIcon } from "@chakra-ui/icons";

export default function PublicationBox({
  heading,
  authors,
  publication,
  citations,
  year,
  link,
}) {
  return (
    <Card variant="outline" className={styles.container}>
      <CardBody
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "column wrap",
        }}
      >
        <div>
          <h3 className={typography.heading_tertiary}>{heading}</h3>
          <p className={typography.paragraph__lighter}>{authors}</p>
          <p className={typography.paragraph__lighter}>{publication}</p>
        </div>

        <Stack mt="6" spacing="3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button color="blue.600" fontSize="xl" leftIcon={<EditIcon />}>
              Cited By {citations}
            </Button>
            <Button color="blue.600" fontSize="xl" rightIcon={<TimeIcon />}>
              Year {year}
            </Button>
          </div>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            size="md"
            colorScheme="blue"
            className={typography.paragraph__small__white}
          >
            <a href={link} target="_blank">
              Open Website
            </a>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
{
  /*<div className={scss.image_container}>*/
}
{
  /*  <Image className={scss.image} src={image} fill={true} alt={alt} />*/
}
{
  /*  /!*<div className={scss.image_category}>*!/*/
}
{
  /*  /!*  <h3 className={typography.heading_tertiary__white}>{category}</h3>*!/*/
}
{
  /*  /!*</div>*!/*/
}
{
  /*</div>*/
}
{
  /*<div>*/
}
{
  /*  <a href={link}>*/
}
{
  /*    <p*/
}
{
  /*      className={*/
}
{
  /*        typography.paragraph +*/
}
{
  /*        " " +*/
}
{
  /*        utilities.top_margin__small +*/
}
{
  /*        " " +*/
}
{
  /*        utilities.text_center*/
}
{
  /*      }*/
}
{
  /*    >*/
}
{
  /*      {title}*/
}
{
  /*    </p>*/
}
{
  /*  </a>*/
}
{
  /*</div>*/
}
