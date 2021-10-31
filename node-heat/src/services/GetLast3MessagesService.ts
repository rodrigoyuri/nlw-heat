import prismaClient from "../prisma";

class GetLast3MessagesService {
  async execute() {
    const messagens = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });
    return messagens;
  }
}

export { GetLast3MessagesService };
