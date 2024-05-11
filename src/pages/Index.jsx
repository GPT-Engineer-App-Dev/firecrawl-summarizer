import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, useToast, Heading, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [quality, setQuality] = useState("");
  const toast = useToast();

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const simulateCrawlAndAnalysis = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "URL can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    fetch("https://api.firecrawl.dev/v0/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer fc-1a67435fe4b54212b98f775c0d8fbc21",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const crawledContent = data.content || "";
        const simulatedSummary = crawledContent
          .split("\n")
          .filter((line) => line.trim())
          .join(" ");
        const simulatedQuality = "High";

        setSummary(simulatedSummary);
        setQuality(simulatedQuality);
        setIsLoading(false);

        toast({
          title: "Crawl Completed",
          description: "The content has been crawled and analyzed successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          title: "Crawl Failed",
          description: "Failed to crawl the website. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Web Crawler and Analyzer
        </Heading>
        <FormControl>
          <FormLabel htmlFor="url">Enter URL to Crawl:</FormLabel>
          <Input id="url" placeholder="https://example.com" value={url} onChange={handleUrlChange} />
        </FormControl>
        <Button leftIcon={<FaRocket />} colorScheme="blue" onClick={simulateCrawlAndAnalysis} isLoading={isLoading}>
          Start Crawl
        </Button>
        {summary && (
          <>
            <Text fontWeight="bold">Summary:</Text>
            <Textarea value={summary} isReadOnly />
            <Text fontWeight="bold">Quality of Text:</Text>
            <Text>{quality}</Text>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
