import { Box, Skeleton, SkeletonText, SkeletonCircle, Stack } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      {/* Skeleton for Image */}
      <Skeleton height="200px" borderRadius="lg" />
      
      {/* Skeleton for Text */}
      <Stack spacing={4} mt={4}>
        <SkeletonText noOfLines={1} skeletonHeight="20px" />
        <SkeletonText noOfLines={2} skeletonHeight="15px" />
      </Stack>

      {/* Skeleton for Price */}
      <SkeletonText mt={4} noOfLines={1} skeletonHeight="25px" />

      {/* Skeleton for Button */}
      <SkeletonCircle size="10" mt={4} />
    </Box>
  );
};

export default SkeletonCard;
