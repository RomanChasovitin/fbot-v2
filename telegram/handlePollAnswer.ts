import prisma from "@/db/prisma";

export const handlePollAnswer = async () => {
  // console.log('handlePollAnswer', pollAnswer)
  return 'ok'
  // if (pollAnswer.option_ids[0] !== 0) return null;
  //   const draft = await prisma.draft.findUnique({
  //     where: {
  //       pollID: pollAnswer.poll_id,
  //     },
  //   });
  //   if (!draft) return null;
    // const player = await this.getOrCreatePlayer(
    //   pollAnswer.user.id,
    //   `${pollAnswer.user.first_name ?? ''} ${
    //     pollAnswer.user.last_name ?? ''
    //   }`.trim(),
    //   pollAnswer.user.username,
    // );
    // await this.prismaService.draft.update({
    //   where: {
    //     id: draft.id,
    //   },
    //   data: {
    //     players: {
    //       connect: {
    //         id: player.id,
    //       },
    //     },
    //   },
    // });
}